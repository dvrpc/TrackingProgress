module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname + '/build',
        publichPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build'
    }
}