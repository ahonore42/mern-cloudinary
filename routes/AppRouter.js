const Router = require('express').Router()
const CloudinaryRouter = require('./CloudinaryRouter')

Router.use('/cloud', CloudinaryRouter)

module.exports = Router