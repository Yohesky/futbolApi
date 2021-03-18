const { Schema, model } = require("mongoose");

const PositionsSchema = Schema({
    code: {
        type: String
    },
    user: {
        required: true,
        type: String
    }
})

module.exports = model("Position", PositionsSchema)