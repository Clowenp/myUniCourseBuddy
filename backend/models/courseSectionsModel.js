const mongoose = require('mongoose')

const courseSectionSchema = mongoose.Schema({

    course_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Courses'
    },
    day : {
        type: [Number],
        required: true
    },
    start_time : {
        type: String,
        required: true
    },
    end_time : {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('CourseSections', courseSectionSchema)