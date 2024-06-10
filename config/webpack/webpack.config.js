/* eslint-disable import/no-extraneous-dependencies */
const { generateWebpackConfig } = require("shakapacker");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");

const customConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Interprets `@import` and `url()` like `import/require()` and will resolve them
        ],
      },
    ],
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    // other plugins
  ],
  resolve: {
    extensions: [".css"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};

const webpackConfig = merge(generateWebpackConfig(), customConfig);

module.exports = webpackConfig;
