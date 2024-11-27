const core = require('@actions/core')
const { setTimeout: sleep } = require('timers/promises')

// limit size of each request to avoid getting timed out
const chunkSize = 100

// limit request rate to one chunk per requestWaitTime (seconds) to avoid exceeding secondary rate limits
// https://docs.github.com/en/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api#secondary-rate-limits
const requestWaitTime = 5
let lastRequestTime = 0

// retry the request if it fails, throw if request fails requestRetries times
// wait requestRetryTime (seconds) before retrying the first time, doubling time with each retry
const requestRetries = 5
const requestRetryTime = 30

module.exports = async function updateRepos (octokit, repos) {
  let responses = []

  for (let i = 0; i < repos.length; i += chunkSize) {
    const chunk = repos.slice(i, i + chunkSize)
    responses.push(await queryRepos(octokit, chunk))
  }

  return responses.flatMap(response => {
    return Object.entries(response).map(([key, obj]) => {
      const index = parseInt(key.replace('index', ''))

      if (obj === null) {
        return repos.find(repo => repo.index === index)
      } else {
        return {
          index,
          owner: obj.owner.login,
          name: obj.name,
          lastCommit: obj.defaultBranchRef.target.committedDate
        }
      }
    })
  })
}

async function queryRepos (octokit, repos) {
  const query = buildQuery(repos)
  const waitTime = lastRequestTime + requestWaitTime * 1000 - Date.now()

  if (waitTime > 0) {
    core.info(`waiting ${Math.round(waitTime / 1000)} seconds...`)
    await sleep(waitTime)
  }

  lastRequestTime = Date.now()
  let nextRetryTime = requestRetryTime

  for (let i = 1; ; i++) {
    try {
      return await octokit.graphql(query)
    } catch (error) {
      if (error.errors !== undefined) {
        const softFail = error.errors.every(
          e => e.message.indexOf('Could not resolve to a Repository') !== -1
        )

        if (softFail) {
          core.info(error)
          return error.data
        }
      }

      if (i < requestRetries) {
        core.info(error)
        core.info(`retrying in ${nextRetryTime} seconds...`)
        await sleep(nextRetryTime * 1000)
        nextRetryTime *= 2
      } else {
        throw error
      }
    }
  }
}

function buildQuery (repos) {
  const frag = `fragment props on Repository {
  owner {
    login
  }
  name
  defaultBranchRef {
    target {
      ... on Commit {
        committedDate
      }
    }
  }
}`

  const query = repos
    .map(repo => {
      return `index${repo.index}: repository(owner: "${repo.owner}", name: "${repo.name}") { ...props }`
    })
    .join('\n')

  return `${frag}\n\n{\n${query}\n}`
}
