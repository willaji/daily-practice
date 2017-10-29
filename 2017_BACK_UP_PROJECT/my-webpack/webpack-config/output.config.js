var dirVars = require('./base/dir-vars.config.js')
module.exports = {
    path: dirVars.buildDir,
    publicPath: '/',
    filename: '[name]/entry.[chunkhash].js',
    chunkFilename: '[id].[chunkhash].bundle.js'
}
