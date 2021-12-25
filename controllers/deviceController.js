const pool = require("../db");

// get device list

exports.device_list = async (req, res) => {
  try {
    const devicesData = await pool.query("SELECT * FROM devices");
    res.status(200).json(devicesData.rows);
  } catch (error) {
    res.status(500).json(error);
  }
  
};

// get a device

exports.device = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const deviceData = await pool.query("SELECT * FROM devices where id=$1", [
      id,
    ]);
    data = deviceData;
    res.status(200).json(data.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create device

exports.device_add = async (req, res) => {
  try {
    const { vehicle_id, device_type_id, device_name, is_online, is_active } =
      req.body;
    let maxId = await pool.query("SELECT max(id) FROM devices");
    maxId = maxId.rows[0].max;
    await pool.query(
      `ALTER SEQUENCE devices_seq RESTART WITH ${maxId + 1} INCREMENT BY 1`
    );
    const devicesData = await pool.query(
      "INSERT INTO devices (vehicle_id,device_type_id,device_name,is_online,is_active) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [vehicle_id, device_type_id, device_name, is_online, is_active]
    );
    res.status(201).json(devicesData.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update device

exports.device_update = async (req, res) => {
  try {
    const { id } = req.params;
    let { vehicle_id, device_type_id, device_name, is_online, is_active } =
      req.body;

    if (!vehicle_id) {
      vehicle_id = await pool.query(
        `select vehicle_id from devices where id=${id}`
      );
      vehicle_id = vehicle_id.rows[0].vehicle_id;
    }

    if (!device_type_id) {
      device_type_id = await pool.query(
        `select device_type_id from devices where id=${id}`
      );
      device_type_id = device_type_id.rows[0].device_type_id;
    }

    if (!device_name) {
      device_name = await pool.query(
        `select device_name from devices where id=${id}`
      );
      device_name = device_name.rows[0].device_name;
    }

    if (!is_online) {
      is_online = await pool.query(
        `select is_online from devices where id=${id}`
      );
      is_online = is_online.rows[0].is_online;
    }

    if (!is_active) {
      is_active = await pool.query(
        `select is_active from devices where id=${id}`
      );
      is_active = is_active.rows[0].is_active;
    }

    const deviceDatas = await pool.query(
      "UPDATE devices SET vehicle_id=$1, device_type_id=$2, device_name=$3, is_online=$4, is_active=$5 where id=$6 RETURNING *",
      [vehicle_id, device_type_id, device_name, is_online, is_active, id]
    );

    res.status(200).json(deviceDatas.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete device

exports.device_delete = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const deviceData = await pool.query(
      "DELETE FROM devices where id=$1 RETURNING *",
      [id]
    );
    data = deviceData;
    console.log(data);
    if (data.rowCount != 0) {
      res.status(200).json(data.rows[0]);
    } else {
      res.json({ message: "No data to delete" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
