const User = require('../models/mUser')
const { createToken } = require('../helpers/jwt')
const { verifyPassword }  = require('../helpers/bcrypt')

class UserController {
    static register(req,res,next){
        const { firstname , email , password , lastname, phoneNumber } = req.body
        User.create( { firstname , email , password , lastname, phoneNumber})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(next)
    }
}

module.exports = UserController