module.exports = async toolbox => {
  toolbox.createEnquirer = async () => {
    const { prompt, strings: { kebabCase } } = toolbox

    try {
      return await toolbox.prompt.ask([
        {
          type: 'input',
          name: 'name',
          message: 'Project name:',
          validate(input) {
            return input.length > 0 ? true : 'Please enter project name'
          },
          result(input) {
            return kebabCase(input)
          }
        },
        {
          type: 'select',
          name: 'platform',
          message: 'Platform:',
          choices: ['web', 'mobile']
        },
        {
          type: 'confirm',
          name: 'coffeescript',
          message: 'Use CoffeeScript?'
        }
      ])
    } catch {
      process.exit()
    }
  }
}
