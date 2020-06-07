// modifiy based on https://runkit.com/melnikow/version-from-requirements-txt
// FIXME: it doesn't work in Node 8 and later
const axios = require('axios');
const moment = require('moment');

async function fetchLastCommitDay(user, repo, branch = 'master') {
  const url = `https://api.github.com/repos/${user}/${repo}/commits?sha=${branch}`
  const { data } = await axios.get(url, { responseType: 'json' })
  return data[0].commit.author.date
}

const badgeDefaults = {
  schemaVersion: 1,
  label: 'last commit',
}

async function handle({ user, repo, branch }) {
  let lastCommitDayStr
  try {
    lastCommitDayStr = await fetchLastCommitDay(user, repo, branch)
  } catch (e) {
    console.log(`[${user }/${repo}] ${e.message}`)
    return { message: 'resource not available', color: 'red' }
  }

  const message = moment(lastCommitDayStr).format('YYYY-MM-DD')
  return {
    message,
    color: age(message),
  }
}

module.exports = async function invokeHandler(query) {
  return Object.assign({}, badgeDefaults, await handle(query))
}

// copy from https://github.com/badges/shields
function colorScale(steps, colors, reversed) {
  if (steps === undefined) {
    throw Error('When invoking colorScale, steps should be provided.')
  }

  const defaultColors = {
    1: ['red', 'brightgreen'],
    2: ['red', 'yellow', 'brightgreen'],
    3: ['red', 'yellow', 'green', 'brightgreen'],
    4: ['red', 'yellow', 'yellowgreen', 'green', 'brightgreen'],
    5: ['red', 'orange', 'yellow', 'yellowgreen', 'green', 'brightgreen'],
  }

  if (typeof colors === 'undefined') {
    if (steps.length in defaultColors) {
      colors = defaultColors[steps.length]
    } else {
      throw Error(`No default colors for ${steps.length} steps.`)
    }
  }

  if (steps.length !== colors.length - 1) {
    throw Error(
      'When colors are provided, there should be n + 1 colors for n steps.'
    )
  }

  if (reversed) {
    colors = Array.from(colors).reverse()
  }

  return value => {
    const stepIndex = steps.findIndex(step => value < step)

    // For the final step, stepIndex is -1, so in all cases this expression
    // works swimmingly.
    return colors.slice(stepIndex)[0]
  }
}
function age(date) {
  const now = moment()
  const dec1st = moment([now.year(), 11, 1])
  if (now.diff(dec1st) < 0) dec1st.add(-1, 'y')
  
  const daysElapsed = moment(date).diff(moment(dec1st), 'days') + 1
  const colorByAge = colorScale([0, 5, 10, 20, 25], undefined, false)
  return colorByAge(daysElapsed)
}
