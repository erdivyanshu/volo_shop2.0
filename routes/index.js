var express = require('express');
var router = express.Router();
var ProductSchema = require("../models/product");


/* GET home page. */
router.get('/', async(req, res) =>{
    let product = []
    product = await ProductSchema.find()
  res.render("index.ejs",{p:product});
});

router.get("/contact", (req, res) => {
    res.render("contact.ejs");
  });

/*get marketing page*/
router.get("/marketing", (req, res) => {
    res.render("marketing.ejs");
  });

module.exports = router;
