const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const connection = require('./db/connection')
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 8000

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req,res) => res.send('Hello, from the backend'))

app.use('/api', AppRouter)

app.listen(PORT, async () => {
    try {
      await connection
      console.log('Database Connected')
      console.log(`App listening on port ${PORT}!`)
    } catch (error) {
      throw new Error('Connection Error')
    }
})
