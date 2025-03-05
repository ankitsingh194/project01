const express = require('express')
const { createUser,getUser,deleteUser,UpdateUser } = require('../controllers/UserController')
const { LoginUser } = require('../controllers/authController')
const verifytoken = require('../middleware/Auth')

const router = express.Router()

router.get('/getuser/:id',verifytoken,getUser)
router.post('/login',LoginUser)
router.post('/create',createUser)
router.put('/update/:id',verifytoken,UpdateUser)
router.delete('/delete/:id',verifytoken,deleteUser)


module.exports = router