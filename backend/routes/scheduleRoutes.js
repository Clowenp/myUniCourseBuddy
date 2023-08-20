const express = require('express')
const router = express.Router()
const {getScheduleId, createSchedule, addScheduleSection, createGroupSchedules } = require('../controllers/scheduleController')

router.get('/', getScheduleId)
router.post('/', createSchedule)
router.put('/:schedule_id', addScheduleSection)
router.put('/create/:group_id', createGroupSchedules)

module.exports = router