const express = require('express')
const router = express.Router()
const {createGroup, getGroupInfo } = require('../controllers/groupController')

router.get('/:group_id', getGroupInfo)
router.post('/', createGroup)

module.exports = router