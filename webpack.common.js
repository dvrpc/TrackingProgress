const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// configure index.html
let indexConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname + "/index.html"),
    file: 'index.html',
    inject: false,
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
  entry: ["@babel/polyfill", "./js/index.js"],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // query: {
        //   presets: ["minify"],
        // },
      },
      // load styles
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // load imgs
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
      // load data
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new CopyWebpackPlugin(
      // [
      // {
      //   from: "./img",
      //   to: "img",
      //   toType: "dir",
      // },
      // {
      //   from: "./data",
      //   to: "data",
      //   toType: "dir",
      // },
      // {
      //   from: "./css",
      //   to: "css",
      //   toType: "dir",
      // },
      // {
      //   from: "./vid",
      //   to: "vid",
      //   toType: "dir",
      // },
      // {
      //   from: "./pdf",
      //   to: "pdf",
      //   toType: "dir",
      // },
      // {
      //   from: "./markdown",
      //   to: "markdown",
      //   toType: "dir",
      // },]
      {
        patterns: [
          { from: "./img", to: "./img" },
          // { from: "./data", to: "./build/data" },
          { from: "./css", to: "./css" },
          { from: "./vid", to: "./vid" },
          { from: "./pdf", to: "./pdf" },
          { from: "./markdown", to: "./markdown" },
        ],
      }
    ),
    // HtmlWebpackPlugin
    indexConfig,
  ],
};