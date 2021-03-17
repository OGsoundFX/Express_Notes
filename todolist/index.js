require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');

const port = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// Setting up the MongoDB Database
// const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://OG-testing:${process.env.SECRET_KEY}@cluster0.fru3y.mongodb.net/todoListDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("list");
//   // perform actions on the collection object
//   client.close();
// });

// const getDbConnectionString = `mongodb+srv://OG-testing:${process.env.SECRET_KEY}@cluster0.fru3y.mongodb.net/todoListDatabase?retryWrites=true&w=majority`;

// mongoose.connect(getDbConnectionString);

var mongoDB = `mongodb+srv://OG-testing:${process.env.SECRET_KEY}@cluster0.fru3y.mongodb.net/todoListDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// setupController(app);

app.listen(port, () => {
    console.log(`app launched on port ${port}`)
});