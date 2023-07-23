const express = require('express');
const cors = require('cors');
const Connections = require( './database/db.js');
const Routes = require('./routes/route.js');
const authRoutes = require('./routes/authRoutes.js'); // Change userRoutes to authRoutes

const bodyParser = require('body-parser');

const app = express();
const allowedOrigins = ['http://localhost:3000','http://localhost:3001'];
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes);

app.use("/api/auth", authRoutes);

Connections();
console.log('hello');
app.listen(PORT,()=> console.log(`your server is running on ${PORT}`));
