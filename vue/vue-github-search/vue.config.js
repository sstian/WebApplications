// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    proxy: {
      "/github-api": {
        target: "https://api.github.com",
        changeOrigin: true,
        pathRewrite: { "^/github-api": "" }
      }
    }
  }
}
