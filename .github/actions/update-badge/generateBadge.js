const moment = require('moment')

const badgeDefaults = {
  schemaVersion: 1,
  label: 'last commit',
  message: 'not available',
  color: 'red'
}

module.exports = function generateBadge (repo) {
  const { label, message, color } = badgeProperties(repo)
  return (
    'https://img.shields.io/badge/' +
    [label, message, color]
      .map(s => encodeURIComponent(s.replace(/\-/g, '--')))
      .join('-')
  )
}

function badgeProperties (repo) {
  if (repo.lastCommit === undefined) {
    return badgeDefaults
  } else {
    const message = moment(repo.lastCommit).format('YYYY-MM-DD')
    return Object.assign({}, badgeDefaults, { message, color: age(message) })
  }
}

function age (date) {
  if (!date.add) {
    return 'brightgreen'
  }

  const now = moment()
  const then = moment(date)
  if (now.diff(date) < 0) date.add(-1, 'y')

  const daysElapsed = now.diff(moment(date), 'days')
  const colorByAge = colorScale([0, 5, 10, 20, 25], undefined, false)
  return colorByAge(daysElapsed)
}

// copy from https://github.com/badges/shields
function colorScale (steps, colors, reversed) {
  if (steps === undefined) {
    throw Error('When invoking colorScale, steps should be provided.')
  }

  const defaultColors = {
    1: ['brightgreen', 'red'],
    2: ['brightgreen', 'yellow', 'red'],
    3: ['brightgreen', 'green', 'yellow', 'red'],
    4: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'red'],
    5: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red']
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
    const stepIndex = steps.findIndex(step => value >= step)

    // For any value above the final step, stepIndex is -1, so in all cases this
    // expression works swimmingly.
    return colors.slice(stepIndex)[0]
  }
}
