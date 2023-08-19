const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({

    name : {
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