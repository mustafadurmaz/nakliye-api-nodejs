const express = require("express");
const vehicleController=require("../controllers/vehicleController")

const router = express.Router();

router.route("/vehicle_list").get(vehicleController.vehicle_list);
router.route("/vehicle_list/:id").get(vehicleController.vehicle);
router.route("/vehicle_add").post(vehicleController.vehicle_add);
router.route("/vehicle_update/:id").patch(vehicleController.vehicle_update);
router.route("/vehicle_delete/:id").delete(vehicleController.vehicle_delete);

module.exports=router;