const Entry = require("./models/data");


const fetchData = async () => {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers", { method: "GET" })
    const data = await response.json();
    const keys = Object.keys(data)
    const finalData = keys.slice(0, 10).map(k => (data[k]))
    try {
        const available = await Entry.find({})
        if (available) {
            await Entry.deleteMany({})
        }
        await Entry.insertMany(finalData)
        console.log("done");
    } catch (error) {
        console.log("error");

    }
}
module.exports = fetchData