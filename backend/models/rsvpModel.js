const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RSVPSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        RSVPInfo: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        addGuest: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('RSVP', RSVPSchema)
