const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@navikt/ds-icons",
  "@navikt/ds-react",
]);

module.exports = withPlugins([withTM], {
  basePath: "/prototyper",
  future: {
    webpack5: true,
  },
});
