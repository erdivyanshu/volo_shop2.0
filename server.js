const express = require('express');
var bodyParser = require('body-parser');
const connectDB=require('./config/db');

const app= express();
connectDB();
//setting view engine
app.set('view-engine','ejs');

//using body-parser
app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(bodyParser.json());
 
//setting static data
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/login0',(req,res)=>{
    res.render('login0.ejs')
})
app.get('/signup0',(req,res)=>{
    res.render('signup0.ejs')
})

//login routes
app.post('/login',(req,res)=>{
    //check for value with database
    //if found then login else show error
})

//signup routes
app.get('/signup', function(req, res){
    res.render('form');});

    app.post('/signup', (req, res) => {
        // Insert Login Code Here
        let name0 = req.body.name;
        let password0 = req.body.password;
        let email0 = req.body.email;
        let mobile0 = req.body.mobile;
        let locality0 = req.body.locality;
        db.user.insertone({
            name:name0,
            email:email0,
            password:password0,
            locality:locality0,
            mobile:mobile0,
        })
      });

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));