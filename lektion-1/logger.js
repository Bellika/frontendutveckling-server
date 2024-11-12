function logger(req, res, next) {
  console.log('Request method: ', req.method)
  next()
}

module.exports = logger