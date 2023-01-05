const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const { EnvironmentPlugin } = require('webpack')

const devConfig = {
    mode: 'development',
    plugins: [
        new EnvironmentPlugin({
            markdownPath: '../markdown/'
        })
    ]
}

module.exports = merge(config, devConfig)