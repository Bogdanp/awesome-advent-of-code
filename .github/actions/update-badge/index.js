const fs = require('fs')
const core = require('@actions/core')

try {
  const filePath = core.getInput('filePath')
  const content = fs.readFileSync(filePath, 'utf8')
  const repos = extractRepositories(content)

  console.log('extract js repos:')
  console.log(repos.join('\n'));
} catch (error) {
  core.setFailed(error.message);
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
function fetchLastCommitTime(repo) {
}
function generateBadget() {
}
