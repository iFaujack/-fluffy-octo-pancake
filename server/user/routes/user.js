const router = require('express').Router()
const userController = require('../controllers/cUser');

router.post('/signUp', userController.register)

module.exports = router