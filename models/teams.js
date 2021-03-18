const { Schema, model } = require("mongoose");

const TeamSchema = Schema({
    clubColors: {
        type: String
    },
    crestUrl: {
        type: String
    },
    email: {
        type: String
    },
    founded: {
        type: Number
    },
    idTeam: {
        type: Number
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    shortName: {
        type: String
    },
    tla: {
        type: String
    },
    venue: {
        type: String
    },
    website: {
        type: String
    },
    area: {
        type: Object
    },
    user: {
        required: true,
        type: String
    }
})

module.exports = model("Team", TeamSchema)