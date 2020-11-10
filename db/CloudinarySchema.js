const { Schema, model } = require('mongoose')

const CloudImage = new Schema(
  {
    url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('cloudimage', CloudImage)