const express = require('express')
const mongoose = require('mongoose')
const User =require('./models/users.model.js')
const app = express()
app.use(express.json())
const port = 3000



app.post('/api/users', async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})


app.get('/api/users', async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error){
        res.status(500).json({message: error.message})
    }
})


app.put('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
            if(!user) {
                return req.status(404).json({message: "This product is not found"});
            }   
            const updateUser = await User.findById(id)
            res.status(200).json(updateUser)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

mongoose.connect("mongodb+srv://jhon437699:9jWGuABKtpzlNZAz@taskhub.prohz.mongodb.net/?retryWrites=true&w=majority&appName=TaskHub")
.then(() => {
    console.log("connected to the dataBase")
    app.listen(port, () => {
        console.log(`This app is running in port ${port}`)
    })
}).catch(() => {
    console.log("Connection is fail")
})