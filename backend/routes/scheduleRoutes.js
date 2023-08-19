const express = require('express')
const router = express.Router()
const {getScheduleId, createSchedule } = require('../controllers/scheduleController')

router.get('/', getScheduleId)
router.post('/', createSchedule)

module.exports = router