const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// update this array with each new snippet
const snippets = [
    'airQuality',
    'bridgeConditions',
    'commuteMode',
    'educationalAttainment',
    'exports',
    'globalConnectivity',
    'highwayCongestion',
    'housingActivity',
    'housingAffordability',
    'incomeDisparities',
    'jobGrowth',
    'landPreservation',
    'milesDriven',
    'populationGrowth',
    'racialAndEthnicDisparities',
    'roadwayReliability',
    'roadwaySafety',
    'sexDisparities',
    'transitConditions',
    'transitRidership'
]

// configure snippets
const snippetPlugins = snippets.map(snippet => {
    return new HtmlWebpackPlugin({
        filename: snippet + '.html',
        template: path.resolve(__dirname + `/indicatorSnippets/${snippet}.html`)
    })
})

// configure index.html
let indexConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname + "/index.html"),
    file: 'index.html',
    inject: 'body'
})

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
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
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
            ]
        ),
    // HtmlWebpackPlugin
        indexConfig
    ].concat(snippetPlugins)
}