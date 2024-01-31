const RSVPModel = require('../models/RSVPmodel')
const mongoose = require('mongoose')

// get all RSVPs
const getRSVPs = async (req, res) =>{
    const RSVPs = await RSVPModel.find({}).sort({createAt:-1})

    res.status(200).json(RSVPModel)
}

// Get a sigle RSVP
const getRSVP = async (req, res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).json({error: 'No such person exists'})
    }

    const rsvp = await RSVPModel.findById({_id: id})

    if(!RSVPModel) {
        return res.status(400).json({error: 'No such person has RSVPed'})
    }
    console.log('RSVP Model', RSVPModel)
    res.status(200).json(RSVPModel)
    
}

// Add an RSVP
const createRSVP = async (req, res) =>{
    const {name,RSVPInfo,description,addGuest} = req.body

    if (!name || !RSVPInfo || !description || addGuest){
        return res.status(400).json({ error: 'Please fill in all fields'})
    }

    try{
        const rsvp = await RSVPModel.create({name,RSVPInfo,description,addGuest})
        res.status(200).json(rsvp)
    }catch(error){
        res.status(400).json({error: error.message})
    }

    
} 

// Delete an RSVP
const deleteRSVP = async (req, res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).json({error: 'No such person exists'})
    }

    const rsvp = await RSVPModel.findOneAndDelete({_id: id})

    if(!RSVPModel) {
        return res.status(400).json({error: 'No such person has RSVPed'})
    }

    res.status(200).json(RSVPModel)
    
}

//update an RSVP
const updateRSVP = async (req, res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).json({error: 'No such person exists'})
    }

    const rsvp = await RSVPModel.findByIdAndUpdate({_id: id}, {...req.body})

    if(!RSVPModel) {
        return res.status(400).json({error: 'No such person has RSVPed'})
    }

    res.status(200).json(RSVPModel)
    
}

module.exports = {
    getRSVPs, 
    getRSVP, 
    createRSVP, 
    deleteRSVP, 
    updateRSVP
  }