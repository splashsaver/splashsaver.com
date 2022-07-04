const withTM = require("next-transpile-modules")([
  "@splashsaver/ui",
  "@splashsaver/lib",
  "@splashsaver/prisma",
]);

module.exports = withTM({
  reactStrictMode: true,
});
