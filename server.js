require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const connection = require("./database/db")
const router = require("./routes/getData")
const fetchData = require("./fetchDataFromApi")
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
connection()

app.use("/data", router)

app.listen(3001, () => { console.log("server started ") })
