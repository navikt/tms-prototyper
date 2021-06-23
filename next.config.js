const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@navikt/ds-icons",
  "@navikt/ds-react",
]);

const isProduction = process.env.NODE_ENV === "production";

module.exports = withPlugins([withTM], {
  basePath: isProduction ? "/prototyper" : undefined,
  future: {
    webpack5: true,
  },
});
