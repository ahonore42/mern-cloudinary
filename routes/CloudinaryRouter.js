const Router = require('express').Router()
const CloudinaryController = require('../controllers/CloudinaryController')

Router.post('/upload/image', CloudinaryController.UploadImage)
Router.get('/images', CloudinaryController.GetImages)
Router.delete('/images', CloudinaryController.DeleteImages)

module.exports = Router