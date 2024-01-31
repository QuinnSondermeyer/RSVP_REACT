const express = require('express')
const {
  getRSVPs, 
  getRSVP, 
  createRSVP, 
  deleteRSVP, 
  updateRSVP
} = require('../controllers/rsvpController')

const router = express.Router()

// main page
router.get('/', getRSVPs)

// GET a single person data
router.get('/:id', getRSVP)

// RSVP to event
router.post('/', createRSVP)

// Update RSVP
router.patch('/:id', updateRSVP)

//remove RSVP
router.delete('/:id', deleteRSVP)


module.exports = router