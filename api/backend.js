let http = require("http");
let httpProxy = require("http-proxy");
let proxy = httpProxy.createProxyServer({});
const https = require("https");

function readURL(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        // получаем статус ответа сервера посредством деструктуризации объекта
        const { statusCode } = res;

        let error;
        if (statusCode !== 200) {
          error = new Error(`Ошибка запроса. Код ответа: ${statusCode}`);
        }

        if (error) {
          reject(error);
          res.resume();
          return;
        }

        res.setEncoding("utf8");

        let rawData = "";
        res.on("data", (chunk) => (rawData += chunk));

        res.on("end", () => resolve(rawData));
      })
      .on("error", (e) => reject(e));
  });
}

module.exports = async (req, res) => {
  // res.json({ a: req.body.url });

  let html;

  readURL(req.body.url)
    .then((data) => {
      html = data;
      console.log("Html1 - " + html);
    })
    .catch((err) => console.log(err.message));

  await res.json({ a: req.body.url });
};
// const http = require("http");
// const httpProxy = require("http-proxy");
// const origin = "https://macao20.com";
// // Create a proxy server with custom application logic
// const proxy = httpProxy.createProxyServer({
//   changeOrigin: true,
//   autoRewrite: true,
//   hostRewrite: true,
//   followRedirects: true,
// });

// /*module.exports = async (req, res) => {
//   res.json({ a: req.body.url });
// };*/

// export const server = http.createServer(function (req, res) {
//   proxy.on("proxyRes", function (proxyRes, req, res) {
//     proxyRes.headers["x-proxy"] = "simple-basic-http-auth-proxy-vercel";
//   });
//   proxy.web(req, res, { target: `${origin}` });
// });

// const port = process.env.AWS_LAMBDA_RUNTIME_API.split(":")[1];
// console.log(`simple-basic-http-auth-proxy for Vercel started on port ${port}`);
// server.listen(port);
