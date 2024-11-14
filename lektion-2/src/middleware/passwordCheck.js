function passwordCheck(req, res, next) {
  const password = req.body['password']
  if (password === 'nodeJS') {
    req.userIsAuthorised = true
  } else {
    req.userIsAuthorised = false
  }
  next()
}

module.exports = passwordCheck