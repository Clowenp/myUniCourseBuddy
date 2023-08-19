const express = require('express')
const router = express.Router()
const {getScheduleId, createSchedule, addScheduleSection } = require('../controllers/scheduleController')

router.get('/', getScheduleId)
router.post('/', createSchedule)
router.put('/:schedule_id', addScheduleSection)

module.exports = router