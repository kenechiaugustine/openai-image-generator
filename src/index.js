require('dotenv').config()
const os = require('os');
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

app.get('/sysInfo', (req, res) => {
    
    const interfaces = os.networkInterfaces();
    const addresses = [];
    for (let k in interfaces) {
        for (let k2 in interfaces[k]) {
            let address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }

    const userOS = os.platform();

    res.json({
        Os: userOS,
        IpAddress: addresses
    })
    
})

app.all('*', (req, res) => {
    res.json({
        errorCode: "404",
        message: "Page not found"
    })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})