const router = require('express').Router();
const userRoute = require('../routes/user');

router.get('/', (req,res,next) => res.send('Succesfully Connected!'))
router.use('/user', userRoute)

module.exports = router