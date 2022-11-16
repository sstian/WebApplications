const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        "@brand-primary": "green",
        "@brand-primary-tap": "rgb(1, 99,1);"
      }
  })
);