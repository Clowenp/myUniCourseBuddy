const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Group = require('../models/groupModel')



const registerUser = asyncHandler( async(req, res) => {

    const { username,password,school } = req.body

    if(!username|| !password || !school){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({username})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // create user
    const user = await User.create({
        username,
        password,
        school
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            password: user.password,
            school: user.school
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user Data')
    }

}) 

const getUserId = asyncHandler( async(req, res) => {
    
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400)
        throw new Error('Missing fields')
    }

    // check if user exists
    const userExists = await User.findOne({username})
    if (!userExists) {
        res.status(400)
        throw new Error('User does not exist')
    }

    const login_credentials = await User.findOne({username, password})
    if (!login_credentials) {
        res.status(400)
        throw new Error('Incorrect Password')
    }

    res.status(200).json(userExists)

    
}) 

const getAllGroups = asyncHandler( async(req, res) => {
    
    const { user_id } = req.params

    const members = await Group.find({members: user_id})

    res.status(200).json(members)
}) 

module.exports = {
    registerUser, getAllGroups, getUserId
}