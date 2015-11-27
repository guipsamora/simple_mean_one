var express = require('express');
var path = require('path');

var fs = require('fs');


var mongoose = require('mongoose');
var mongodb = require('mongodb');



// starts express and thus the server
var app = express();

// this connects the database with node
mongoose.connect("mongodb://localhost/local");
var db = mongoose.connection;

//Handeling Error and success for the database-connection
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", function(callback){
   console.log("Database up and running")
});

// Necessary to connect the server with static files such as
// HTML, CSS e JS
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/lib'));


app.use(function(req,res){

});

app.get("/", function(req, res){
   res.send("Hello world");
   // res.sendfile(__dirname + "client/index.html");
});

/******************************

******************************/

// started the server, listen to income requests on port 3000
app.listen(3000, function(){
   console.log("Server running on localhost port 3000");
   console.log(__dirname);
});


// connect my html - static html content - OK
// connect javascript to my html and css file - OK
// connect my server and my database - OK
// create a database schema with mongoose
// get something from the database
// post something to the database
// find something in the database
// showing it

/******************************

******************************/

/******************************

******************************/