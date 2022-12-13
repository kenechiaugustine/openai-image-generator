const env = require('dotenv').config()
const app = require('express')()

app.get('/', (req, res)=> {
    console.log('Server listing to index /')
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})