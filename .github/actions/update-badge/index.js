const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')
const generateBadge = require('./generateBadge')
const updateRepos = require('./updateRepos')

;(async () => {
  const ghToken = core.getInput('ghToken')
  const fileNames = core.getInput('fileNames').split(' ')
  let octokit = github.getOctokit(ghToken)

  for (const fileName of fileNames) {
    await processFile(fileName, octokit)
  }
})()

async function processFile (fileName, octokit) {
  try {
    const { pre, lines, post } = await core.group(
      `Reading from '${fileName}'...`,
      () => parseFile(fileName)
    )

    let repos = await core.group('Parsing repositories...', () =>
      parseGithubRepos(lines)
    )

    repos = await core.group('Querying repositories...', async () => {
      return await updateRepos(octokit, repos)
    })

    core.info(`count=${repos.length}`)
    const preLines = pre.split('\n').length

    await core.group('Updating badges...', async () => {
      for (const repo of repos) {
        const line = generateLine(repo)

        if (line === lines[repo.index]) {
          core.info(`...skipped line ${repo.index + preLines}: '${line}'`)
        } else {
          lines[repo.index] = line
          core.info(`...updated line ${repo.index + preLines}: '${line}'`)
        }
      }
    })

    await core.group('Writing file...', () => {
      const contents = pre + lines.join('\n') + post
      fs.writeFileSync(fileName, contents)
      core.info(`Finished writing to '${fileName}'`)
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

function parseFile (fileName) {
  const file = fs.readFileSync(fileName, 'utf8')
  const [preSection, bottomSection] = file.split('### Solutions')
  const [repoSection, postSection] = bottomSection.split('### Live Streams')
  const pre = preSection + '### Solutions'
  const lines = repoSection.split('\n')
  const post = '### Live Streams' + postSection
  return { pre, lines, post }
}

function parseGithubRepos (lines) {
  const repos = []

  lines.some((line, index) => {
    if (line.indexOf('[') !== -1 && line.indexOf(']') !== -1) {
      if (otherDomain(line)) {
        core.info(`...line refers to non-GH domain: '${line}'`)
      } else {
        const idx1 = line.indexOf('[')
        const idx2 = line.indexOf(']')

        if (idx1 >= 0 && idx2 >= 0) {
          const repoStr = line.slice(idx1 + 1, idx2)
          const [owner, name] = repoStr.split('/')
          repos.push({ index, owner, name })
          core.info(`...parsed repo: '${owner}/${name}'`)
        }
      }
    }

    return false
  })

  return repos
}

function otherDomain (line) {
  return (
    !(
      line.indexOf('[') < line.indexOf('/') &&
      line.indexOf(']') > line.indexOf('/')
    ) ||
    line.indexOf('gitlab.com') !== -1 ||
    line.indexOf('gist.github.com') !== -1
  )
}

function generateLine (repo) {
  const badge = generateBadge(repo)
  const repoStr = `${repo.owner}/${repo.name}`
  return `* [${repoStr}](https://github.com/${repoStr}) ![Last Commit on GitHub](${badge})`
}
