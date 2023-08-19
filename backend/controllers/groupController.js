const asyncHandler = require('express-async-handler')
const User = require('../models/groupModel')


const createGroup = asyncHandler( async(req, res) => {

    const { members,access_code,overlap_time } = req.body

    if(!members|| !access_code){
        res.status(400)
        throw new Error('Missing Fields')
    }

    // check if user exists
    const codeExists = await User.findOne({access_code})

    if(codeExists){
        res.status(400)
        throw new Error('Access Code already exists')
    }

    // create user
    const group = await Group.create({
        members,
        access_code,
        overlap_time
    })

    if(group){
        res.status(201).json({
            _id: group.id,
            members: user.members,
            overlap_time: user.overlap_time,
            access_code: user.access_code
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user Data')
    }

}) 

const getGroupInfo = asyncHandler( async(req, res) => {
    const { group_id } = req.params

    const groupExists = await Group.findOne({group_id})

    if (!groupExists) {
        res.status(400)
        throw new Error('Group Id Already Exists')
    }

    res.status(200).json(groupExists)
})

module.exports = {
    createGroup, getGroupInfo
}