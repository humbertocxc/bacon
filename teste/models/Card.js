const mongoose = require('mongoose')


const Card = mongoose.model('Card', {
  title: String,
  description: String,
  user_id: Number,
  deadline: Date,
  category_id: Number
})

module.exports = Card