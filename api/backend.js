module.exports = async (req, res) => {
  res.json({ a: req.body.url });
};
