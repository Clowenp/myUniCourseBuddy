const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
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
    professor : {
        type: String,
    },
    description : {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('Courses', courseSchema)