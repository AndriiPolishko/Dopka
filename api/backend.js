const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  autoRewrite: true,
  hostRewrite: true,
  followRedirects: true,
});

const server = http.createServer(function (req, res) {
  // load from ENVs
  const origin = process.env.ORIGIN;

  proxy.on("proxyRes", function (proxyRes, req, res) {
    proxyRes.headers["x-proxy"] = "http-proxy";
  });
  proxy.web(req, res, { target: `${origin}` });
});

module.exports = async (req, res) => {};
