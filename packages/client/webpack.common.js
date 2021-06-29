const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry : path.resolve(__dirname, "./src/index.tsx"),
  output : {
    clean: true,
    filename : "[name].[contenthash].js",
    path : path.resolve(__dirname, "./build"),
  },
  module : {
    rules : [
      {
        test : /.(js|jsx|tsx|ts)$/,
        use : "babel-loader",
        exclude : /node_modules/
      },
      {
        type : "asset/resource",
        test : /.(png|svg|jpg|jpeg|json|gif|txt)&/
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({ template : path.resolve(__dirname, "./public/index.html") })
  ],
  resolve : {
    extensions : [".js", ".jsx", ".tsx", ".ts"],
    preferRelative : true
  }
}