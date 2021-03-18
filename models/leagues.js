const { Schema, model } = require("mongoose");

const LeagueSchema = Schema({
    name: {
        type: String,
    },
    code: {
        type: String
    },
    idLeague: {
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

module.exports = model("League", LeagueSchema)