var openInEditor = require('launch-editor-middleware')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    before(app) {
      console.log('before')
      app.use('/__open-in-editor', openInEditor('code'))
    },
  },
}
