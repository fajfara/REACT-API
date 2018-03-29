const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Set up the Express app
const app = express();

// Connect to DB
mongoose.connect('mongodb://localhost/programmers');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());


app.use('/api',routes);

// Error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
  console.log("Now listening for requests");
});


 