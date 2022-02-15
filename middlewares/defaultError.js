module.exports = (_err, _req, res, _next) =>
  res.status(500).json({ error: true, message: 'Server error' });
