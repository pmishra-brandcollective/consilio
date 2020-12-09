const Items =  require('../models/item')
const { notFound } = require('../lib/errorMessage')

async function itemsIndex(req, res, next) {
  try {
    const items = await Items.find()
    if (!items) throw new Error(notFound)
    res.status(200).json(items)
  } catch (err) {
    next(err)
  }
}

async function itemShow(req, res, next) {
  try {
    const item = await Items.findById(req.params.id).populate('user')
    if (!item) throw new Error(notFound)
    res.status(200).json(item)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: itemsIndex,
  show: itemShow
}