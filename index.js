const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/todos", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: `route not found : ${req.method} :${req.url}` })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongodb Connected")
    app.listen(process.env.PORT, console.log("server runninnng"))
})
