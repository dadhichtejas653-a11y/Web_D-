const express = require("express");
const router = express.Router();
const productctrl = require("../controllers/productctrl.js");

router.get("/",productctrl.home);

router.get("/getdata",productctrl.getproduct);

router.get("/insertdata",productctrl.insertproduct);

router.post("/createdata",productctrl.createproduct);

router.post("/update/:userid",productctrl.updateproduct);

router.get("/edit/:userid",productctrl.editproduct);

router.get("/delete/:userid",productctrl.deleteproduct);

module.exports=router;

