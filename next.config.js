const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@navikt/ds-icons",
  "@navikt/ds-react",
]);

module.exports = withPlugins([withTM], {
  future: {
    webpack5: true,
  },
});
