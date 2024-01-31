require('dotenv').config()

const express = require('express')
const RSVPRoutes = require('./routes/rsvpRoutes')
const mongoose = require('mongoose')

//express app
const ExprApp = express()
ExprApp.use(express.json())

ExprApp.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  
// routes
ExprApp.use('/api/rsvp', RSVPRoutes)

// Conect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    ExprApp.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
