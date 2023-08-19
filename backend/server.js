const express = require ('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')
const cors = require('cors')

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/group', require('./routes/groupRoutes'))
app.use('/api/schedule', require('./routes/scheduleRoutes'))




app.listen(5000, () => console.log("Server starts up on port 5000"))