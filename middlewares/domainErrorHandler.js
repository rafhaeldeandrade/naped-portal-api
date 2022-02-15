const domainErrorMap = {
  NOT_FOUND: 404,
};

module.exports = (err, _req, res, next) => {
  const status = domainErrorMap[err.code];
  if (!status) return next();

  return res.status(status).json({ error: true, message: err.message });
};
