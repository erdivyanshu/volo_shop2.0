var express = require('express');
var router = express.Router();
var ProductSchema = require("../models/product");


app.get("/login", function (req, res) {
    res.render("form");
});

app.post("/login", async (req, res) => {

    const user = await UserModel.find({
        email: req.body.email
    })
    if (user[0].password == req.body.password)
        res.render("index.ejs", {
            loggedin: 1
        })
    else res.send("user doesnt exist");
});