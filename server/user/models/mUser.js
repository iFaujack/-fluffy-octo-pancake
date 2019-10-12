const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { createPassword } = require('../helpers/bcrypt')

const userSchema = new Schema({
    firstname : {
        type: String,
        required : [true, "You must fill Firstname Field"],
    },
    lastname : {
        type: String,
    },
    email : {
        type : String, 
        required: [true, "Yous must fill Email field"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password : {
        type : String,
        required: [true, "You must fill Password field"]
    },
    phoneNumber: {
        type : String,
        required: [true, 'You must fill phone number field'],
        min: [11, 'Your phone number not valid'],
        max: [14, 'Your phone number not valid'],
    },
    fund : {
        type: Number,
    }
})

userSchema.pre('save',function(){
    this.password = createPassword(this.password)
    this.fund = 0
})
const userModel = mongoose.model("User",userSchema)
module.exports = userModel