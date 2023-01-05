const connectDB = require("../config/db");
var ProductSchema = require("../models/product");
const bcrypt = require("bcrypt");

app.get("/AddProduct", function (req, res) {
    res.render("form");
});

app.post("/AddProduct", (req, res) => {

    var product = new ProductSchema();
    product.Pname = req.body.Pname;
    product.price = req.body.price;
    product.ShopOwner = req.body.ShopOwner;
    product.dis = req.body.dis;

    product.save(function (err, data) {
        if (err) {
            console.log(error);
        } else {
            res.send("Data inserted");
        }
    });
});