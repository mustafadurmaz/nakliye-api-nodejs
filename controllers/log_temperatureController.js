const pool = require("../db");

// get temperature list

exports.temp_list = async (req, res) => {
    try {
  
      const tempData = await pool.query("SELECT * FROM log_temperature");
      res.status(200).json(tempData.rows);
    } catch (error) {
      res.status(500).json(error);
    }
    
  };


// create temperature 

exports.temp_add = async (req, res) => {
    try {
      const { vehicle_id,device_id,read_data } = req.body;
      let maxId = await pool.query("SELECT max(id) FROM log_temperature");
      maxId = maxId.rows[0].max;
      await pool.query(
        `ALTER SEQUENCE log_temperature_seq RESTART WITH ${maxId + 1} INCREMENT BY 1`
      );
      const tempData = await pool.query(
        "INSERT INTO log_temperature (vehicle_id,device_id,read_data) VALUES ($1,$2,$3) RETURNING *",
        [vehicle_id,device_id,read_data]
      );
      res.status(201).json(tempData.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  };

