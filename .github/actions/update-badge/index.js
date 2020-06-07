const fs = require('fs')
const core = require('@actions/core')
const endpoint = require('./endpoint')

try {
  const inputFile = core.getInput('inputFile')
  const outputFile = core.getInput('outputFile')

  const content = fs.readFileSync(inputFile, 'utf8')
  const repos = extractRepositories(content)
  console.log('[] extract js repos:')
  console.log(repos.join('\n'));

  Promise.all(repos.map(generateLine))
    .then((lines) => {
      fs.writeFileSync(outputFile, lines.join('\n'))
      console.log(`[] finished writing to ${outputFile}`)
    })
    .catch(error => {
      core.setFailed(error.message)
    })
} catch (error) {
  core.setFailed(error.message)
}

function extractRepositories(content) {
  const repos = []
  const lines = content.split('\n')

  let collect = false
  lines.some((line) => {
    if (line === '*Solutions to AoC in JavaScript.*') {
      collect = true
    } else if (collect) {
      if (line.indexOf('####') === 0) return true

      const idx1 = line.indexOf('[')
      const idx2 = line.indexOf(']')
      if (idx1 >= 0 && idx2 >= 0) {
        repos.push(line.slice(idx1 + 1, idx2))
      }
    }

    return false
  })

  return repos
}

async function generateLine(repoStr) {
  const badge = await generateBadget(repoStr)
  return `* [${repoStr}](https://github.com/${repoStr}) ![Last Commit on GitHub](${badge})`
}
async function generateBadget(repoStr) {
  const [user, repo] = repoStr.split('/')
  const { label, message, color } = await endpoint({ user, repo })

  console.log(`...fetched repo ${repoStr}`)

  return 'https://img.shields.io/badge/' + [label, message, color]
    .map(s => encodeURIComponent(s.replace(/\-/g, '--')))
    .join('-')
}
