const withTM = require("next-transpile-modules")(["@splashsaver/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
