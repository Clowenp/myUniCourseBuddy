const asyncHandler = require('express-async-handler')
const Schedule = require('../models/scheduleModel')
const Course = require('../models/courseModel')
const CourseSection = require('../models/courseSectionsModel')
const Group = require('../models/groupModel')


var lmao = []

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

    const hasDuplicates = (arr) => arr.length !== new Set(arr).size;
    if (hasDuplicates(course_ids)) {
        res.status(400)
        throw new Error("cannot contain duplicate courses")
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

const compareTime = (startTime1, endTime1, startTime2, endTime2) => {
    if (startTime1[0] < startTime2[0]) {
        if (endTime1[0] < startTime2[0]) {
            return false; // not overlapping
        } else if (endTime1[0] > startTime2[0]) {
            return true; // overlapping
        } else {
            if (endTime1[1] <= startTime2[1]) {
                return false; // not overlapping
            } else {
                return true;
            }
        }
    } else if (startTime2[0] < startTime1[0]) {
        if (endTime2[0] < startTime1[0]) {
            return false; // not overlapping
        } else if (endTime2[0] > startTime1[0]) {
            return true; // overlapping
        } else {
            if (endTime2[1] <= startTime1[1]) {
                return false; // not overlapping
            } else {
                return true;
            }
        }
    } else {
        return true;
    }
}


const createASchedule = async (schedule, currentSections) => {
    console.log(currentSections.length)
    if (currentSections.length >= 5) {
        lmao.push([...currentSections])
        // console.log(lmao)
        // currentSections = []
    } else {
        const sections = await CourseSection.find({"course_id": schedule["course_ids"][currentSections.length]})
        // console.log(schedule["course_ids"][currentSections.length+1])
        // console.log(sections)
        for (let i = 0; i < sections.length; i++) {
            // console.log(sections[i]["_id"])

            createASchedule(schedule, [...currentSections, sections[i]["_id"]])
            // currentSections.pop()
        }
    }    // get the course sections
    
    // go through each section and choose them (recurse)
    // for (var section in sections) {
    //     // make sure this section does not overlap with another course
    //     var isBad;
    //     for (var comparingSections in currentSections) {
    //         // for each day of comparingSections
    //         for (var day in comparingSections["day"]) {
    //             if (section["day"].includes(day)) {
                    // const comparingSectionsStart = comparingSections["start_time"].split(":")
                    // const sectionsStart = sections["start_time"].split(":")
                    // const comparingSectionsEnd = comparingSections["end_time"].split(":")
                    // const sectionsEnd = sections["end_time"].split(":")
    //                 isBad = compareTime(sectionsStart, sectionsEnd, comparingSectionsStart, comparingSectionsEnd)

    //                 if (isBad) {
    //                     break;
    //                 }
    //             }
    //         }
    //         if (isBad) break;
    //     }
    //     if (isBad) continue;
    //     return await createASchedule([...currentSections, section], {...schedule, "course_ids": schedule["course_ids"].slice(1)})
    // }
}

const findBest = async (group_id) => {
    const group = await Group.findById(group_id);
    const member_ids = group["members"]
    const schedules = {};

    // go through each member's schedule
    for (var i = 0; i < member_ids.length; i++) {
        let user_id = member_ids[i]
        // if there is no schedule for the specific user:
        {const schedule = await Schedule.findOne({user_id, group_id})
        if (!schedule) { // end and give an error
            return
        } else {
            const section1 = await CourseSection.find({"course_id": schedule["course_ids"][0]}) // sections of the first course in the schedule
            for (let j = 0; j < section1.length; j++) {
                await createASchedule(schedule, [ section1[j]["_id"] ])
            }
            schedules[user_id] = [...lmao]
            console.log("START1")
            for (let j = 0; j<lmao.length; j++) {
                console.log("START1")

                for(let k = 0; k<lmao[j].length; k++) {
                    const lol = await CourseSection.findById(lmao[j][k])
                    console.log(lol)
                }
            }
            
        }}
        console.log("Length: ", lmao.length)
        lmao = []
    }  
    return schedules
}


const createGroupSchedules = asyncHandler(async (req, res) => {
    const {group_id} = req.params;
    lmao = []
    const schedules = await findBest(group_id)
    // console.log(lmao)
    // setTimeout(() => {}, 5000)


    res.status(200).json(schedules)
})

module.exports = {
    getScheduleId, createSchedule, addScheduleSection, createGroupSchedules
}