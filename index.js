const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


mongoose.connect("mongodb+srv://jhon437699:9jWGuABKtpzlNZAz@taskhub.prohz.mongodb.net/?retryWrites=true&w=majority&appName=TaskHub")
.then(() => {
    console.log("connected to the dataBase")
    app.listen(port, () => {
        console.log(`This app is running in port ${port}`)
    })
    
}).catch(() => {
    console.log("Connection is fail")
})