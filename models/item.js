const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
})

itemSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Item', itemSchema)
