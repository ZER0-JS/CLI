module.exports = {
  name: 'create',
  alias: ['new', 'init'],
  description: 'Initialize a new project',
  run: async (toolbox) => {
    const { error: printError } = toolbox.print

    const response = await toolbox.createEnquirer()

    try {
      const files = [
        'package.json.ejs',
        '.gitignore.ejs'
      ]

      const filesCopy = files.reduce((acc, file) => {
        return acc.concat([
          toolbox.template.generate({
            template: `/${ file }`,
            target: `${ response.name }/${ file.replace('.ejs', '') }`,
            props: response
          })
        ])
      }, [])

      await Promise.all(filesCopy)
      await toolbox.installPackages()
    } catch(err) {
      printError(err)
    }
  }
}
