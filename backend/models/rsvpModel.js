const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RSVPSchema = new Schema({
    name: {
    type: String,
    require:true
    },
    RSVPInfo: {
        type: String,
        require:false
    },
    description: {
        type: String,
        require:false
    },
    addGuest: {
        type: Number,
        require:false
    }

},{timestamps:true})

module.exports = mongoose.model('RSVP',RSVPSchema)
