const { merge } = require("webpack-merge");
const config = require("./webpack.common");
const { EnvironmentPlugin } = require("webpack");

const prodConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      markdownPath: "./markdown/",
      baseURL: "/TrackingProgress/"
    }),
  ],
};

module.exports = merge(config, prodConfig);
