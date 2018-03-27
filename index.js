const express = require('express');
const routes = require('./routes/api');


// Set up the Express ap
const app = express();

app.use('/api',routes);

// Listen for requests
app.listen(process.env.port || 4000, function(){
  console.log("Now listening for requests");
});


 