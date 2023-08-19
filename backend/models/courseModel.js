const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
    },
    
})

module.exports = mongoose.model('Courses', courseSchema)