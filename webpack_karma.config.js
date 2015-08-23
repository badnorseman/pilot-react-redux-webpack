var path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  output: {
    pathinfo: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [path.join(__dirname, "/spec"), path.join(__dirname, "/src")],
      loader: "babel"
    }]
  }
};
