const jwt = require('jsonwebtoken')
const { secret } = require('../config/environments')
const User = require('../model/user')

async function secureRoute(req, res, next) {
  try {
    if (!req.headers.authorization) throw new Error()

    const token = req.headers.authorization.replace('Bearer ', '')

    const payload = jwt.verify(token, secret)

    const user = await User.findById(payload.sub)

    if (!user) throw new Error()

    req.currentUser = user

    next()

  } catch (err) {
    next(err)
  }
}

module.exports = secureRoute