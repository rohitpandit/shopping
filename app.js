var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var pages = require('./routes/pages');  


//connect to db
mongoose.connect(config.database);
var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>{
    console.log("connected to database")
})

var app = express();


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//set public folder
app.use(express.static(path.join(__dirname, 'public')));


//set the routes

app.get('/',pages);


//start the server
var port = 5000;
app.listen(port, ()=>{
    console.log('server started on port ', port);
})