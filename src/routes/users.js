const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)


router.get('/create', userController.GetCreateUsers)

router.get('/update/:id', userController.GetUpdateUsers)

router.get('/delete/:id', userController.GetDeleteUsers)



router.post('/create', userController.createUser)

router.post('/update/:id', userController.updateUsers)

router.post('/delete/:id', userController.deleteUsers)


module.exports = router