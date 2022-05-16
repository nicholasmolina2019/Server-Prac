// this is how we require dependendcies in our file
const express = require('express');

// this activates the express framework
const app = express();

// sets up route handlers - this is how we respone to requests
app.get('/cats', (req, res) => {
    

   // send an http response using the express response object
   // using .send() method
res.send(['mr.worms', 'garfield', 'sachi']);

});
app.get('/about', (req,res) => {

res.send('<p>Everything about this website<p>')

});

//added arrow function
app.listen(3000, () => {

console.log('Express is is listening for requests from brower on port 3000')

});