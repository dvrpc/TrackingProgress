const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const { EnvironmentPlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

const devConfig = {
    mode: 'development',
    plugins: [
        new EnvironmentPlugin({
            markdownPath: '../markdown/',
            baseURL: ''
        }),
        new CopyPlugin({
            patterns: [
              { from: "./data", to: "./data" }
            ]
        }),
    ]
}

module.exports = merge(config, devConfig)