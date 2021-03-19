const express = require("express")
require("dotenv").config()
const cors = require("cors")
const {dbConnection} = require("./db/config")

//create server
const app = express()

//cors

app.use(cors())

//read request
app.use(express.json())

//db
dbConnection()

//routes
app.use("/api/leagues", require("./routes/leagues"))
app.use("/api/teams", require("./routes/teams"))
app.use("/api/positions", require("./routes/positions"))
app.use("/api/email", require("./routes/email"))

app.listen(process.env.PORT, () => {
    console.log("server running at", process.env.PORT)
})