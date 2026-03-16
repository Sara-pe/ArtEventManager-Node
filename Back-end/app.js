// 1) Import express + Create server
const express = require('express'); 
const server = express(); 

// ? Recuperate environment variables :
const { PORT } = process.env;
// Add DB

// ? To configure the API to parse incoming JSON requests
server.use(express.json());



// 2) Requests - ROUTES are in /routes

const router = require('./routes'); //importing the logic of the routes from other folder
server.use('/api', router); // Show to the server that he should use the router



// 3) Listen the server in the port
server.listen(PORT, () => {
    console.log(`🚀 Express Server started on port ${ PORT }`);
})
