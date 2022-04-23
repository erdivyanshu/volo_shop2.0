//mongodb connection

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
var UserModel = require('../models/User');

//asynchronous arrow function

const connectDB = async() =>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            //useCreateindex:true
        });
        console.log("MongoDB connected....");
    }catch(err){
        console.error(err.message);
        //exit process failure
        process.exit(1);
    }
}

module.exports=connectDB;