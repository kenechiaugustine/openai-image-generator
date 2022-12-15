const env = require('dotenv').config()
const express = require('express')
const OpenAiRouter = require('./routes/openai.routes')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', OpenAiRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})