const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        require: [true, "Place enter the name"]
    },

    lastName: {
        type: String,
        require: [true, "Place enter the lastName"]
    },
    age: {
        type: Number,
        require: true,  
        default: 0  
    },
    email: {
        type: String,
        require: [true, "Place enter the Place enter the email"]
    },
    image: {
        type: String,
        require: false  
    }
},{
    Timestamps:true
})



const User = mongoose.model("User", UserSchema);

module.exports = User;