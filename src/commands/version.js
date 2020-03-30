module.exports = {
  name: 'version',
  alias: 'v',
  description: 'Output the version number',
  dashed: true,
  run: async toolbox => {
    const { success: printSuccess } = toolbox.print

    toolbox.brand.printInTemplate(true, () => {
      printSuccess(`  ${ toolbox.brand.nameCap } version ${ toolbox.meta.version() }`)
    })
  }
}
