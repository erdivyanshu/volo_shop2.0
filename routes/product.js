<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var ProductSchema = require("../models/product");
=======
const connectDB = require("../config/db");
var ProductSchema = require("../models/product");
const bcrypt = require("bcrypt");
>>>>>>> 867de2d33f79c398054562488f39269e59ba7ed7

router.get('/product/:Pname', async(req,res)=>{
    // req.route.query.tagId
  
    let product = []
      product = await ProductSchema.find({
        Pname: req.params.Pname
      })
    res.render("product.ejs",{p:product[0]});
  });

// app.get("/AddProduct", function (req, res) {
//     res.render("form");
// });

// app.post("/AddProduct", (req, res) => {

//     var product = new ProductSchema();
//     product.Pname = req.body.Pname;
//     product.price = req.body.price;
//     product.ShopOwner = req.body.ShopOwner;
//     product.dis = req.body.dis;

//     product.save(function (err, data) {
//         if (err) {
//             console.log(error);
//         } else {
//             res.send("Data inserted");
//         }
//     });
// });
module.exports=router;