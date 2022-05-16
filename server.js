// this is how we require dependendcies in our file
const express = require('express');

// this activates the express framework
const app = express();

// sets up route handlers - this is how we respone to requests
app.get('/', (request, response)=> {

   // send an http response using the express response object
   // using .send() method
respond.send('Hello World');

});
//added arrow function
app.listen(3000, () => {

console.log('Expresis is listening for requests from brower on port 3000')

});