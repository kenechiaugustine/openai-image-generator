const env = require('dotenv').config()
const app = require('express')()
const OpenAiRouter = require('./routes/openai.routes')


app.use('/openai', OpenAiRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})