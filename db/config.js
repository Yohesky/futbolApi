const mongoose = require("mongoose")

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('db online')
    }
    catch(err) {
        throw new("Error al inciar el servidor")
    }
}

module.exports = {
    dbConnection
}