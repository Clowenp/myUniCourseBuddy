const asyncHandler = require('express-async-handler')
const Schedule = require('../models/scheduleModel')
const Course = require('../models/courseModel')
const CourseSection = require('../models/courseSectionsModel')


const getScheduleId = asyncHandler( async(req, res) => {

    const { user_id, group_id } = req.body

    if (!user_id || !group_id) {
        res.status(400)
        throw new Error("Missing Fields");
    }

    const scheduleExists = await Schedule.findOne({user_id, group_id})

    if (!scheduleExists) {
        res.status(400)
        throw new Error("Schedule does not exist")
    } else {
        res.status(201).json(scheduleExists)
    }

}) 

const createSchedule = asyncHandler( async(req, res) => {
    
    const {user_id, group_id, course_ids } = req.body

    if (!user_id || !group_id || !course_ids ) {
        res.status(400)
        throw new Error("Missing Fields");
    }

    const groupExistsSchedule = await Schedule.findOne({group_id, user_id})

    if (groupExistsSchedule) {
        res.status(400)
        throw new Error("Schedule already exists for user in Group")
    }

    const schedule = await Schedule.create({
        user_id,
        group_id,
        course_ids
    })

    if (schedule) {
        res.status(201).json({
            _id: schedule.id,
            group: schedule.group_id,
            course_ids: schedule.course_ids
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid Schedule Data')
    }


}) 

const addScheduleSection = asyncHandler( async(req, res) => {
    const { schedule_id } = req.params
    const { course_sections_ids } = req.body
    
    if (!schedule_id || !course_sections_ids ) {
        res.status(400)
        throw new Error("Missing Fields");
    }

    const scheduleExists = await Schedule.findByIdAndUpdate(schedule_id, {"course_sections_ids": course_sections_ids})
    if (!scheduleExists) {
        res.status(400)
        throw new Error("Schedule Not Updated");
    }
    
    const newSchedule = await Schedule.findByIdAndUpdate({"_id": schedule_id})

    res.status(200).json(newSchedule)
}) 

module.exports = {
    getScheduleId, createSchedule, addScheduleSection
}