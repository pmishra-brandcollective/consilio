const router = require('express').Router()
const auth = require('../controllers.auth')
const users = require('../controllers/user')

// Log Related
router.route('/register')
  .post(auth.register)
router.route('/login')
  .post(auth.login)

// Profiles Related

module.exports = router