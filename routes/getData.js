const express = require("express")
const getData = require("../controllers/getData")

const router = express.Router()
router.get("/", getData)

module.exports = router