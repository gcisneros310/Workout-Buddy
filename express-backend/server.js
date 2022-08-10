require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
 

// instantiate express
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    // console.log('app.use function running real quick')
    next()
})

// retrieves routes from workouts and user
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to MongoDB cluster

mongoose.connect(process.env.PORT || 4000)
.then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to DB and listening on PORT', process.env.PORT)    
    })
})
.catch((error) => { // catch error in case of bad authentication / failed authentication
    console.log(error)
})

