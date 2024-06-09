const { generateWebpackConfig } = require("shakapacker");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const webpackConfig = generateWebpackConfig({
  plugins: [
    new ReactRefreshWebpackPlugin(),
    // other plugins
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
});

module.exports = webpackConfig;
