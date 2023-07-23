const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connections =()=>{
    // const MONGODB_URL = 'mongodb+srv://panthiamit3075:panthiamit3075@mern-todolist.82slqfq.mongodb.net/?retryWrites=true&w=majority'
    const MONGODB_URL = 'mongodb+srv://panthiamit3075:panthiamit3075@mern-todolist.82slqfq.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connect(MONGODB_URL, {useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log('Database connected sucessfully');
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })
    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with the database',console.error.message);
    })
 }
 module.exports= Connections;