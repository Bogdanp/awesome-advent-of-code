const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')
const endpoint = require('./endpoint')

let octokit

(async function() {
  try {
    const ghToken = core.getInput('ghToken')
    const inputFile = core.getInput('inputFile')
    const outputFile = core.getInput('outputFile')

    const content = fs.readFileSync(inputFile, 'utf8')
    const lines = content.split('\n')
    const repos = await core.group('Extracting repos...', () => extractRepositories(lines))
    core.info(`count=${repos.length}`)

    octokit = github.getOctokit(ghToken)
    await core.group('Fetching repositories & updating lines...', async () => {
      for (const repo of repos) {
        const line = await generateLine(repo.repoStr)
        if (otherDomain(lines[repo.index])) {
          core.info(`...line refers to non-GH domain: '${lines[repo.index]}'`)
        } else if (shouldUpdate(lines[repo.index], line)) {
          lines[repo.index] = line
          core.info(`...updated line: '${line}'`)
        } else {
          core.info(`...skipped line: '${line}'`)
        }
      }
    })

    await core.group('Writing README...', () => {
      fs.writeFileSync(outputFile, lines.join('\n'))
      core.info(`Finished writing to ${outputFile}`)
    })
  } catch (error) {
    core.setFailed(error.message)
  }
})()

function extractRepositories(lines) {
  const repos = []

  let collect = false
  lines.some((line, index) => {
    if (line === '### Solutions') {
      collect = true
    } else if (line === '### Live Streams') {
      collect = false
    } else if (collect) {
      const idx1 = line.indexOf('[')
      const idx2 = line.indexOf(']')
      if (idx1 >= 0 && idx2 >= 0) {
        repos.push({
          index,
          repoStr: line.slice(idx1 + 1, idx2)
        })
      }
    }

    return false
  })

  return repos
}

async function generateLine(repoStr) {
  const badge = await generateBadge(repoStr)
  return `* [${repoStr}](https://github.com/${repoStr}) ![Last Commit on GitHub](${badge})`
}

async function generateBadge(repoStr) {
  const [owner, repo] = repoStr.split('/')
  const { label, message, color } = await endpoint(octokit, { owner, repo })

  core.info(`...fetched repo ${repoStr}`)

  return 'https://img.shields.io/badge/' + [label, message, color]
    .map(s => encodeURIComponent(s.replace(/\-/g, '--')))
    .join('-')
}

function shouldUpdate(oldLine, newLine) {
  const lastReg = /Last Commit on GitHub/;
  const badDateReg = /red\)$/;
  return !lastReg.test(oldLine) ||
    !badDateReg.test(newLine) ||
    badDateReg.test(oldLine);
}

function otherDomain(line) {
  return line.indexOf("gitlab.com") !== -1 ||
    line.indexOf("gist.github.com") !== -1;
}
