var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "./spec/sum_spec",
    "./spec/fetch_all_products_spec"
  ],
  output: {
    path: path.join(__dirname, "spec"),
    publicPath: "/spec/",
    filename: "bundle_spec.js"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, "/spec"),
      loader: "babel?stage=0"
    }]
  }
};
