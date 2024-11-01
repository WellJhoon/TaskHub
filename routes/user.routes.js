const express = require("express")
const User = require('../models/users.model.js')
const router = express.Router()
const { getProducts, getUserById, updateUser, createUser,deleteUser} = require("../controller/user.controller.js")



router.get('/', getProducts)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)


module.exports = router;
