const pool = require("../db");

// get device_type list

exports.type_list = async (req, res) => {
  try {
    const devices_typeData = await pool.query("SELECT * FROM devices_type");
    res.status(200).json(devices_typeData.rows);
  } catch (error) {
    res.status(500).json(error);
  }
  
};

// get a device_type

exports.device_type = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const device_typeData = await pool.query("SELECT * FROM devices_type where id=$1", [
      id,
    ]);
    data = device_typeData;
    res.status(200).json(data.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create device type

exports.type_add = async (req, res) => {
  try {
    const { type_name,type_description,is_active } =
      req.body;
    let maxId = await pool.query("SELECT max(id) FROM devices_type");
    maxId = maxId.rows[0].max;
    await pool.query(
      `ALTER SEQUENCE devices_type_seq RESTART WITH ${maxId + 1} INCREMENT BY 1`
    );
    const devices_typeData = await pool.query(
      "INSERT INTO devices_type (type_name,type_description,is_active) VALUES ($1,$2,$3) RETURNING *",
      [type_name,type_description,is_active]
    );
    res.status(201).json(devices_typeData.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete device_type

exports.type_delete = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const device_typeData = await pool.query(
      "DELETE FROM devices_type where id=$1 RETURNING *",
      [id]
    );
    data = device_typeData;
    if (data.rowCount != 0) {
      res.status(200).json(data.rows[0]);
    } else {
      res.json({ message: "No data to delete" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
