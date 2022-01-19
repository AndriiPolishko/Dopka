async function FetchHtml(url) {
  let response = await fetch(url);
  console.log("HTML: " + response.text());
  return await response.text();
}

module.exports = async (req, res) => {
  // res.json({ a: req.body.url });
  let url = req.body.url;
  return FetchHtml(url);
};