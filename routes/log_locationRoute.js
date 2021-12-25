const express = require("express");
const log_locationController=require("../controllers/log_locationController")

const router = express.Router();

router.route("/gps_list").get(log_locationController.gps_list);
router.route("/gps_add").post(log_locationController.gps_add);


module.exports=router;