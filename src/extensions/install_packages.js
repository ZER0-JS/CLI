module.exports = async toolbox => {
  toolbox.installPackages = () => {
    const Listr = require('listr')

    return new Listr([
      {
        title: 'First task',
        task: (ctx, task) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
          })
        }
      },
      {
        title: 'Second task',
        task: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
          })
        }
      }
    ]).run()
  }
}
