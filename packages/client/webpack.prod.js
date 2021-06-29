const WebpackCommon = require("./webpack.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge }= require("webpack-merge");

module.exports = merge(WebpackCommon, {
  mode : "production",
  module : {
    rules : [
      {
        test: /.css$/,
        use : [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  devtool : "source-map",
  plugins : [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization : {
    minimize: true,
    splitChunks : {
      chunks : "all"
    },
    minimizer : [
      '...',
      new CssMinimizerPlugin()
    ]
  }
});