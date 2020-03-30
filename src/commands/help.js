module.exports = {
  name: 'help',
  alias: 'h',
  hidden: true,
  dashed: true,
  run: async toolbox => {
    const { success: printSuccess, printCommands } = toolbox.print

    toolbox.brand.printInTemplate(true, () => {
      printSuccess(`  ${ toolbox.brand.nameCap } version ${ toolbox.meta.version() }`)
      printCommands(toolbox)
    })
  }
}
