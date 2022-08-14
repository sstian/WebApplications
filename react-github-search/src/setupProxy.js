const {createProxyMiddleware: proxy} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/github-api", {
      target: "https://api.github.com",
      changeOrigin: true,
      pathRewrite: {"^/github-api": ""}
    })
  );
}