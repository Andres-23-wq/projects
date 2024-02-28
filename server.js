//import express framework:
const express = require("express");


// Port nr. for server will be defined:
const PORT = process.env.PORT || 5500;

// Express app will be created and imported
let app = express();


// Serve static files from the 'frontend' directory
app.use(express.static('frontend'));


// Other routes and middleware can be defined here:
app.listen(PORT, ()=> {
    console.log("server running on Port $(PORT)");
});






