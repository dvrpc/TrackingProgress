const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// update this array with each new snippet
const snippets = [
    'airQuality',
    'bridgeConditions',
    'commuteMode',
    'educationalAttainment',
    'emissions',
    'exportedGoods',
    'globalConnectivity',
    'housingActivity',
    'housingAffordability',
    'incomeDisparities',
    'innovation',
    'jobGrowth',
    'landConsumption',
    'milesDriven',
    'pavementConditions',
    'populationGrowth',
    'racialAndEthnicDisparities',
    'roadwayReliability',
    'roadwaySafety',
    'sexDisparities',
    'transitConditions',
    'transitRidership',
    'waterQuality'
]

// configure snippets
const snippetPlugins = snippets.map(snippet => {
    return new HtmlWebpackPlugin({
        filename: snippet + '.html',
        template: path.resolve(__dirname + `/indicatorSnippets/${snippet}.html`),
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
    })
})

// configure index.html
let indexConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname + "/index.html"),
    file: 'index.html',
    inject: 'body',
    minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
    }
})

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
                },
                {
                    from: './vid',
                    to: 'vid',
                    toType: 'dir'
                }
            ]
        ),
    // HtmlWebpackPlugin
        indexConfig
    ].concat(snippetPlugins)
}