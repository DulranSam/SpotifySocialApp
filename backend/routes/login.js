const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.json({Alert:"Login portal"})
})


module.exports = router;