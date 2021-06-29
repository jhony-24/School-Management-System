const WebpackCommon = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    new MiniCssExtractPlugin()
  ],
  optimization : {
    splitChunks : {
      chunks : "all"
    }
  }
});