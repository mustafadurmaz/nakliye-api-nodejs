const express = require("express");
const log_temperatureController=require("../controllers/log_temperatureController")

const router = express.Router();

router.route("/temp_list").get(log_temperatureController.temp_list);
router.route("/temp_add").post(log_temperatureController.temp_add);


module.exports=router;