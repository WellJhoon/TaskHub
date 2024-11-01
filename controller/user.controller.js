const User = require('../models/users.model.js')

const getProducts = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

const updateUser = async (req, res) => {
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
}

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

const deleteUser = async (req, res) => {
    try{
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return req.status(404).json({message: "This product is not found"});
        }
        res.status(200).json({message: `the user with id: ${id} is deleted`})
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getUserById,
    updateUser,
    createUser,
    deleteUser

}


