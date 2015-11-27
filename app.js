var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
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

// create mongoose database Schema
var mongooseSchema = new mongoose.Schema({
   name:{
      type: String,
      required: true,
   },

   telephone: {
      type: Number,
      required: true,
   }
},{collection: "local"});

//Initiates an instance of the collection model.
var list = mongoose.model("local", mongooseSchema);

// Necessary to connect the server with static files such as
// HTML, CSS e JS
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/lib'));


app.use(function(req,res){

});

app.get("/", function(req, res){
   res.send("Hello world");
   list.find(function(err,data){
      res.json(data);
   })
});

//This is important in order ro receive data from the client. It has to be parsed correctly. 
// It populates req.body with (among other things) the value of the POST parameters
// bodyParser is a part of "Connect", a set of middlewares for node.js.
// it's simply a thin wrapper that tries to decode JSON, if fails try to decide URLEncoded, and if fails try to decode Multi-Part
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}))

// save data in the database
app.post("/form", function(req, res){
      
});


// started the server, listen to income requests on port 3000
app.listen(3000, function(){
   console.log("Server running on localhost port 3000");
   console.log(__dirname);
});


// connect my html - static html content - OK
// connect javascript to my html and css file - OK
// connect my server and my database - OK
// create a database schema with mongoose - OK
// get something from the database
// post something to the database
// find something in the database
// showing it

/******************************

******************************/

/******************************

******************************/

/******************************

******************************/