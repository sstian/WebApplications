const { override, addPostcssPlugins } = require("customize-cra");
const px2rem = require("postcss-px2rem");

module.exports = override(
  addPostcssPlugins([px2rem({ remUnit: 37.5 })])
);