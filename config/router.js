const router = require('express').Router()
const auth = require('../controllers/auth')
const items = require('../controllers/items')

// Items Related

router.route('/items')
  .get(items.index)

router.route('/items/:id')
  .get(items.show)

// Log Related
router.route('/register')
  .post(auth.register)
router.route('/login')
  .post(auth.login)

module.exports = router