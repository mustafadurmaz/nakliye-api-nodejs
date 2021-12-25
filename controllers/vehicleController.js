const pool = require("../db");

// get vehicle list

exports.vehicle_list = async (req, res) => {
    try {
  
      const vehiclesData = await pool.query("SELECT * FROM vehicles");
      res.status(200).json(vehiclesData.rows);
    } catch (error) {
      res.status(500).json(error);
    }
   
  };

// get a vehicle

exports.vehicle = async (req, res) => {
    try {
      const { id } = req.params;
      let data = {};
      const vehicleData = await pool.query("SELECT * FROM vehicles where id=$1", [
        id,
      ]);
      data = vehicleData;
      res.status(200).json(data.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// create vehicle

exports.vehicle_add = async (req, res) => {
    try {
      const { vehicle_plate, current_status, is_active } = req.body;
      let maxId = await pool.query("SELECT max(id) FROM vehicles");
      maxId = maxId.rows[0].max;
      await pool.query(
        `ALTER SEQUENCE vehicles_seq RESTART WITH ${maxId + 1} INCREMENT BY 1`
      );
      const vehiclesData = await pool.query(
        "INSERT INTO vehicles (vehicle_plate, current_status, is_active) VALUES ($1,$2,$3) RETURNING *",
        [vehicle_plate, current_status, is_active]
      );
      res.status(201).json(vehiclesData.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  // update vehicle

exports.vehicle_update = async (req, res) => {
    try {
      const { id } = req.params;
      let { vehicle_plate, current_status, is_active } = req.body;
  
      if (!vehicle_plate) {
        vehicle_plate = await pool.query(
          `select vehicle_plate from vehicles where id=${id}`
        );
        vehicle_plate = vehicle_plate.rows[0].vehicle_plate;
      }
  
      if (!current_status) {
        current_status = await pool.query(
          `select current_status from vehicles where id=${id}`
        );
        current_status = current_status.rows[0].current_status;
      }
  
      if (!is_active) {
        is_active = await pool.query(
          `select is_active from vehicles where id=${id}`
        );
        is_active = is_active.rows[0].is_active;
      }
  
      const vehicleDatas = await pool.query(
        "UPDATE vehicles SET vehicle_plate=$1, current_status=$2, is_active=$3 where id=$4 RETURNING *",
        [vehicle_plate, current_status, is_active, id]
      );
  
      res.status(200).json(vehicleDatas.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  // delete vehicle

exports.vehicle_delete = async (req, res) => {
    try {
      const { id } = req.params;
      let data = {};
      const vehicleData = await pool.query(
        "DELETE FROM vehicles where id=$1 RETURNING *",
        [id]
      );
      data = vehicleData;
      if (data.rowCount != 0) {
        res.status(200).json(data.rows[0]);
      } else {
        res.json({ message: "No data to delete" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };