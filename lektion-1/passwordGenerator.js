function passwordGenerator(req, res, next) {
  console.log(req.body)
  password = req.body['firstWord'] + req.body['secondWord']
  next()
}

module.exports = passwordGenerator