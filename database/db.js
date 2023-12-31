const mongoose = require("mongoose")
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected");
    } catch (error) {
        console.log("cannot connect");
    }
}
module.exports = connection