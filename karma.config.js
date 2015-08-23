"use strict";

module.exports = function (config) {
  config.set({
    browsers: [
      "Chrome"
    ],
    frameworks: [
      "jasmine-ajax",
      "jasmine"
    ],
    files: [
      "spec/testEntries.js"
    ],
    preprocessors: {
      "spec/testEntries.js": [
        "webpack",
        "sourcemap"
      ]
    },
    reporters: [
      "dots"
    ],
    webpack: require("./webpack_karma.config"),
    webpackServer: {
      noInfo: true //please don"t spam the console when running in karma!
    }
  });
};
