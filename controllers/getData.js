const express = require("express")
const Entry = require("../models/data")
const asyncHandler = require("express-async-handler")
const fetchData = require("../fetchDataFromApi")

const getData = asyncHandler(async (req, res) => {
    try {
        //------------- call this do get data (10 objects) from api and store to datbase
        fetchData()
        const data = await Entry.find({})
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json({ msg: "no data found on server..." })
    }
})

module.exports = getData