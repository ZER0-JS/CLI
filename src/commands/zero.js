module.exports = {
  hidden: true,
  run: async toolbox => {
    const { colors, info: printInfo } = toolbox.print

    toolbox.brand.printInTemplate(true, () => {
      printInfo(`  Welcome to ${ colors.blue(toolbox.brand.nameCap) } CLI version ${ colors.blue(toolbox.meta.version()) }!`)
      printInfo(`  Type ${ colors.yellow(`${ toolbox.brand.name } help`) } to view commands.`)
    })
  }
}
