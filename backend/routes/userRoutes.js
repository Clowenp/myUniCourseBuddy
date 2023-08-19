const express = require('express')
const router = express.Router()
const {registerUser, getUserId, getAllGroups } = require('../controllers/userController')

router.post('/login', getUserId)
router.post('/', registerUser)
router.get('/group/:user_id', getAllGroups)

module.exports = router