const requireInContext = require.context("./", true, /\S+Spec\.js$/);
requireInContext.keys().forEach(requireInContext);
