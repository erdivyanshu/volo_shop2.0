var express = require('express');
var router = express.Router();

router.get("/login", function (req, res) {
    res.render("form");
  });
  
  router.post("/login", async (req, res) => {
  
    if (req.session.user) {
      res.redirect('/shopfront');
  
    } else {
      li=1;
  
      let user = []
      user = await UserModel.find({
        email: req.body.email
      })
  
  
      if (user.length) {
        if (user[0].password == req.body.password) {
          session = req.session;
          session.user = user[0].name;
          session.email = user[0].email;
          session.locality = user[0].locality;
          session.mobile = user[0].mobile;
  
          res.redirect('/shopfront');
        } else {
          // console.log("wrong password");
          req.flash('message','Please!Input Correct Credentials!');
          res.redirect('/login0');
        }
      } else {
        // console.log("wrong userid");
  
        res.redirect('/login0');
      }
    }
  });
  module.exports=router;