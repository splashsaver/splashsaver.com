const withTM = require("next-transpile-modules")([
  "@splashsaver/ui",
  "@splashsaver/lib",
]);

module.exports = withTM({
  reactStrictMode: true,
});
