const express = require("express");
const pool = require("./db.js");
const vehicleRoute = require("./routes/vehicleRoute");
const deviceRoute = require("./routes/deviceRoute");
const device_typeRoute = require("./routes/device_typeRoute");
const log_temperatureRoute = require("./routes/log_temperatureRoute");
const log_locationRoute = require("./routes/log_locationRoute");

const app = express();

app.use(express.json());

app.use("/vehicle", vehicleRoute);
app.use("/device", deviceRoute);
app.use("/device_type", device_typeRoute);
app.use("/log_temperature", log_temperatureRoute);
app.use("/log_location", log_locationRoute);

app.listen(3000, () => {
  console.log("Server is working");
});
