// load in express library
const express = require('express');
const app = express()

// Pretend Database
var contractapplication = {
    contractstatus: "In Progress",
    Name: "Sam Ralston",
    Course: "Advanced Computing Research Course"
}

// set up the HTTP Requests, specifify the path/ul and a callback that has variables 'request' from client, and the 'response' you want to give
// This serves builder.html to the frontend (client) from localhost:1010/
app.get('/', function(req, res){
    console.log("Client requested /, ")
    res.sendFile(__dirname + '/wwwfiles/builder.html');
    });


// This serves a json object to the frontend (client) from localhost:1010/api/contractapplicationdetails
app.get("/api/contractapplicationdetails",(req, res) => {
    console.log("Client requested application details")
     res.json(contractapplication)
// Error handling can go here if request is invalid.

});

app.listen(1010, () => {
    console.log("server is up and running on port 1010");
});