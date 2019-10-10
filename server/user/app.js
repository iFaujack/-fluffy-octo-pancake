// if(!process.env.NODE !== process.env.NODE == 'development'){
//     require('dotenv').config()
// }

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT

app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req,res,next) => res.send('Successfully Connected!'))

app.listen(PORT, function(){
    console.log('Server running on port '+PORT)
})

module.exports = app