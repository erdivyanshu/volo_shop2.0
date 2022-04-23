const connectDB = require("./config/db");
var UserModel = require("./models/User");
const bcrypt = require("bcrypt");


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