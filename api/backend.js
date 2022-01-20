const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  autoRewrite: true,
  hostRewrite: true,
  followRedirects: true,
});

const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });

  req.on("end", function () {
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(body);
  });
});

server.listen(8000);
