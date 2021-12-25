const express = require("express");
const device_typeControlller=require("../controllers/device_typeController")

const router = express.Router();

router.route("/type_list").get(device_typeControlller.type_list);
router.route("/type_list/:id").get(device_typeControlller.device_type);
router.route("/type_add").post(device_typeControlller.type_add);
router.route("/type_delete/:id").delete(device_typeControlller.type_delete);

module.exports=router;