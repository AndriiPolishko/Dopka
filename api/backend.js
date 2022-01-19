const http = require("http");
const httpProxy = require("http-proxy");

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  autoRewrite: true,
  hostRewrite: true,
  followRedirects: true,
});

module.exports = async (req, res) => {
  res.json({ a: req.body.url });
};

export const server = http.createServer(function (req, res) {
  proxy.on("proxyRes", function (proxyRes, req, res) {
    proxyRes.headers["x-proxy"] = "simple-basic-http-auth-proxy-vercel";
  });
  proxy.web(req, res, { target: `${origin}` });
});

const port = process.env.AWS_LAMBDA_RUNTIME_API.split(":")[1];
console.log(`simple-basic-http-auth-proxy for Vercel started on port ${port}`);
server.listen(port);
