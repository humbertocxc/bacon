const mongoose = require('mongoose')


const Photo = mongoose.model('Photo', {
  filename: String,
})

module.exports = Photo