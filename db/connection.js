const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/cloudyUploads', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports = connection