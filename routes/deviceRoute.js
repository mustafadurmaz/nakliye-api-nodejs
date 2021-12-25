const express = require("express");
const deviceController=require("../controllers/deviceController")

const router = express.Router();

router.route("/device_list").get(deviceController.device_list);
router.route("/device_list/:id").get(deviceController.device);
router.route("/device_add").post(deviceController.device_add);
router.route("/device_update/:id").patch(deviceController.device_update);
router.route("/device_delete/:id").delete(deviceController.device_delete);

module.exports=router;