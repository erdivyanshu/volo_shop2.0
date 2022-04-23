
app.get("/signup", function (req, res) {
    res.render("form");
});

app.post("/signup", (req, res) => {
    let name0 = req.body.name;
    let password0 = req.body.password;
    let email0 = req.body.email;
    let mobile0 = req.body.mobile;
    let locality0 = req.body.locality;

    var user = new UserModel();
    user.name = name0;
    user.email = email0;
    user.password = password0;
    user.locality = locality0;
    user.mobile = mobile0;

    user.save(function (err, data) {
        if (err) {
            console.log(error);
        } else {
            res.send("Data inserted");
        }
    });
});