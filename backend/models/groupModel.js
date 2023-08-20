const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({

    members : {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Users'
    },
    overlap_time : {
        type: Number
    },
    access_code : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Groups', groupSchema)