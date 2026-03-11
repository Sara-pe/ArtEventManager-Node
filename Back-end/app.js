// 1) Import express + Create server
const express = require('express'); 
const server = express(); 

// ? Recuperate environment variables :
const { PORT, DB_CONNECTION } = process.env;

// ? To configure the API to parse incoming JSON requests
server.use(express.json());

// MIDDLEWARE
const logMiddleware = require('./middlewares/log.middleware');
server.use(logMiddleware());
// ------------------------------------------------------


// CONNECTION DB

const mongoose = require("mongoose");
server.use( async (req, res, next) => {
    
    try {

    
        await mongoose.connect(DB_CONNECTION, { dbName : 'ArtEventManager' });   //! ----- Use this name on MongoDB----
        console.log("💾 Successfully connected to the DB !");

        next(); 

    } catch(err){

        console.log(`❌ Connection Failed \n[Reason]\n ${err}`);

        res.status(500).json( { statusCode : 500 , message : 'Impossible to connect to the DB'  } );
    
    }
})
// -------------------------------------------------


// 2) Requests - ROUTES are in /routes

const router = require('./routes'); //importing the logic of the routes from other folder
server.use('/api', router); // Show to the server that he should use the router



// 3) Listen the server in the port
server.listen(PORT, () => {
    console.log(`🚀 Express Server started on port ${ PORT }`);
})
