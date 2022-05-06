const mongoose = require('mongoose')


const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  photo_id: Number
})

module.exports = User