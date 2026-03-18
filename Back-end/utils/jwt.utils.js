
const jwt = require('jsonwebtoken');

// Environment variables
const { JWT_ISSUER, JWT_AUDIENCE, JWT_SECRET } = process.env;


const jwtUtils = {

    generate : (user) => {

        
        return new Promise( (resolve, reject) => {

            // ? 1) Payload with some data of the user, that will stock in the token

            const payload = { 
                id : user._id, 
                role : user.role
            }

            // ? 2) Parameters of the token
            const options = {
             
                algorithm : 'HS512', 
               
                expiresIn : '3d',
            
                audience : JWT_AUDIENCE,
              
                issuer : JWT_ISSUER
            }

            // ? 3) Création du token
            
            jwt.sign(payload, JWT_SECRET, options, (error, token) => {
              
                if(error){
                    reject(error); 
                }

                resolve(token); 
            } )
        } )
    },

    decode : (token) => {
        return new Promise((resolve, reject) => {

            //? 1) if there is an empty token
            if(!token) {
                reject(new Error('No token received'));
            }

            //? 2) If there's a toke -> decode it
            const options = {
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }

            jwt.verify(token, JWT_SECRET, options, (error, payload) => {
                if(error){
                    reject(error);
                }
                resolve(payload);
            })

        })
    }
}

module.exports = jwtUtils;