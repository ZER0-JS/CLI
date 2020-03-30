const { build } = require('gluegun')



async function run(argv) {
  const cli = build('zero')
    .exclude([ 'semver', 'system', 'http', 'patching' ])
    .src(__dirname)
    .checkForUpdates(0)
    .create()

  return await cli.run(argv)
}



module.exports = { run }
