const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// entry: './js/index.js',
module.exports = {
    entry: ['@babel/polyfill', './js/index.js'],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['minify']
                }
            },
            // load styles
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // load imgs
            {
                test: /\.(png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            },
            // load data
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            // load html snippets
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false,
                        minimize: true
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                {
                    from: './img',
                    to: 'img',
                    toType: 'dir'
                },
                {
                    from: './data',
                    to: 'data',
                    toType: 'dir'
                },
                {
                    from: './css',
                    to: 'css',
                    toType: 'dir'
                }
            ],

        )
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}