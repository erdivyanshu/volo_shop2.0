const express = require("express");
var bodyParser = require("body-parser");
const connectDB = require("./config/db");
var UserModel = require("./models/User");
var ProductSchema = require("./models/product");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
let u;

const app = express();
connectDB();

//setting view engine
app.set("view-engine", "ejs");

//using body-parser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: true,
  cookie: {
    maxAge: oneDay
  },
  resave: false
}));


//setting static data path
app.use(express.static(__dirname + "/public"));


// app.get('*',(req, res)=>{
//   res.status(404).send( 'Not found');
// });



//session data to local
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
    res.locals.email=req.session.email;
    res.locals.locality=req.session.locality;
    res.locals.mobile=req.session.mobile;
  
  next();

});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/product", (req, res) => {
  res.render("product.ejs");
});
app.get("/shopfront", (req, res) => {
  if(req.session.user)
  res.render("shopfront.ejs");
  else res.status(404).send( 'Not found');
});
app.get("/profile", (req, res) => {
  if(req.session.user)
  res.render("profile.ejs");
  else res.status(404).send( 'Not found');
    
});
app.get("/login0", (req, res) => {
  res.render("login0.ejs", {

  });
});
app.get("/signup0", (req, res) => {
  res.render("signup0.ejs", {

  });
});
app.get("/Addproduct0", (req, res) => {
  res.render("addproduct.ejs");
});
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


// cookie parser middleware
app.use(cookieParser());

//login routes
app.get("/login", function (req, res) {
  res.render("form");
});

app.post("/login", async (req, res) => {

  const user = await UserModel.find({
    email: req.body.email
  })

  let f=1;
  if(!user)f=0;

  if(f){
  if (user[0].password == req.body.password) {
    session = req.session;
    session.user = user[0].name;
    session.email = user[0].email;
    session.locality = user[0].locality;
    session.mobile = user[0].mobile;
    u=user[0];

res.redirect('/shopfront');}
    else {
      res.redirect('/login0');
  }}
  else{
    res.redirect('/login0');
}



});



//signup routes
app.get("/signup", function (req, res) {
  res.render("form");
});

app.post("/signup", (req, res) => {
  // Insert Login Code Here
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

const port = 5000; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));