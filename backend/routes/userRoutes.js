const express = require('express')
const router = express.Router()
const {registerUser, getUserId, getAllGroups } = require('../controllers/userController')

router.get('/', getUserId)
router.post('/', registerUser)
router.get('/group/:user_id', getAllGroups)

module.exports = router