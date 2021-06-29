const WebpackCommon = require("./webpack.common");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = merge(WebpackCommon, {
  mode : "development",
  module : {
    rules : [
      {
        test: /.css$/,
        use : ["style-loader", "css-loader"]
      }
    ]
  },
  devtool : "eval-source-map",
  target : "web",
  devServer : {
    hot: true,
    open: true,
    port : 3000,
    contentBase : "./build",
    index : "index.html",
    historyApiFallback: true,
  },
  plugins : [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
});