const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/users.model.js')
const userRoutes = require('./routes/user.routes.js')
const app = express()
const port = 3000

//midelwares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
});

mongoose.connect("mongodb+srv://jhon437699:9jWGuABKtpzlNZAz@taskhub.prohz.mongodb.net/?retryWrites=true&w=majority&appName=TaskHub")
.then(() => {
    console.log("connected to the dataBase")
    app.listen(port, () => {
        console.log(`This app is running in port ${port}`)
    })
}).catch(() => {
    console.log("Connection is fail")
})