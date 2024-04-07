const core = require('@actions/core')

// limit size of each request to avoid getting timed out
const chunkSize = 200

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

    throw error
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
