const mongoose = require('mongoose')


const Category = mongoose.model('Category', {
  name: String,
  isActive: Boolean,
  addable: Boolean
})

module.exports = Category