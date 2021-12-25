const pool = require("../db");

// get location list

exports.gps_list = async (req, res) => {
    try {
  
      const gpsData = await pool.query("SELECT * FROM log_location");
      res.status(200).json(gpsData.rows);
    } catch (error) {
      res.status(500).json(error);
    }
    
  };


// create gps 

exports.gps_add = async (req, res) => {
    try {
      const { vehicle_id,device_id,latitude,longtitude } = req.body;
      let maxId = await pool.query("SELECT max(id) FROM log_location");
      maxId = maxId.rows[0].max;
      await pool.query(
        `ALTER SEQUENCE log_location_seq RESTART WITH ${maxId + 1} INCREMENT BY 1`
      );
      const gpsData = await pool.query(
        "INSERT INTO log_location (vehicle_id,device_id,latitude,longtitude) VALUES ($1,$2,$3,$4) RETURNING *",
        [vehicle_id,device_id,latitude,longtitude]
      );
      res.status(201).json(gpsData.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  };
