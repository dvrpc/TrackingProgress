const { merge } = require("webpack-merge");
const config = require("./webpack.common");
const { EnvironmentPlugin } = require("webpack");
const CopyPlugin = require('copy-webpack-plugin')

const prodConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      markdownPath: "./markdown/",
      baseURL: "/TrackingProgress/"
    }),
    new CopyPlugin({
      patterns: [
        { from: "./data", to: "./data" }
      ]
    }),
  ],
  output: {
    clean: true
  }
};

module.exports = merge(config, prodConfig);
