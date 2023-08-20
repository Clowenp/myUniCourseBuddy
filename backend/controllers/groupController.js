const asyncHandler = require('express-async-handler')
const Group = require('../models/groupModel')


const createGroup = asyncHandler( async(req, res) => {

    const { members,access_code,overlap_time } = req.body

    if(!members|| !access_code){
        res.status(400)
        throw new Error('Missing Fields')
    }

    // check if group exists
    const codeExists = await Group.findOne({access_code})

    if(codeExists){
        res.status(400)
        throw new Error('Access Code already exists')
    }

    // create group
    const group = await Group.create({
        members,
        access_code,
        overlap_time
    })

    if(group){
        res.status(201).json({
            _id: group.id,
            members: group.members,
            overlap_time: group.overlap_time,
            access_code: group.access_code
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user Data')
    }

}) 

const getGroupInfo = asyncHandler( async(req, res) => {
    const { group_id } = req.params

    const groupExists = await Group.findOne({"_id": group_id})

    if (groupExists) {
        res.status(400)
        throw new Error('Group Id Already Exists')
    }

    res.status(200).json(groupExists)
})

const addGroupMember = asyncHandler( async (req, res) => {
    const { group_id } = req.params;
    const { user_id } = req.body;

    if(!user_id) {
        res.status(400)
        throw new Error('user_id does not exist')
    }


    const groupExists = await Group.findOne({"_id": group_id})
    if(groupExists["members"].includes(user_id)) {
        res.status(400)
        throw new Error('user_id is already in this group')
    }
    console.log(groupExists)
    if (!groupExists) {
        res.status(400)
        throw new Error('Group Id doesnt Exist')
    }

    await Group.findByIdAndUpdate(group_id, {members: [...groupExists["members"], user_id]})
    const newGroup = await Group.findById(group_id);
    res.status(200).json(newGroup);
})

module.exports = {
    createGroup, getGroupInfo, addGroupMember
}