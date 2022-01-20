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
  res.json({ a: req.body.url });

  let html;

  await readURL(req.body.url)
    .then((data) => {
      html = data;
      console.log("Html1 - " + html);
    })
    .catch((err) => console.log(err.message));

  console.log("Html2 - " + html);
};
