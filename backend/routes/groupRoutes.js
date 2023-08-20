const express = require('express')
const router = express.Router()
const {createGroup, getGroupInfo, addGroupMember } = require('../controllers/groupController')

router.get('/:group_id', getGroupInfo)
router.put('/:group_id', addGroupMember)
router.post('/', createGroup)

module.exports = router