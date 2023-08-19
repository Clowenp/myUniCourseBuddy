const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({

    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    group_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Groups'
    },
    course_ids : {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Courses'
    }
})

module.exports = mongoose.model('Schedules', scheduleSchema)