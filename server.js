const express = require('express');
const cors = require("cors")
const { connection } = require("./config/db.js")
const ChargingStation = require("./routes/ChargingStation.route.js")
const SiteRoutes =require("./routes/SiteRoutes.js")
const ChargerRoutes=require("./routes/ChargerRoutes.js")
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json())

app.use(cors())
app.use('/api', ChargingStation);
app.use('/api',SiteRoutes)
app.use('/api',ChargerRoutes)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected Successfully to MongoDb")
    }
    catch (err) {
        console.log("Error while connecting to db")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})