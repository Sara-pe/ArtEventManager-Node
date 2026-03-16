//const authService = require("../services/auth.service");
const jwtUtils = require('../utils/jwt.utils');

//Jsonwebtoken: Library that generates a security token stored in local storage, so the user doesn't have to log in every minute

const authController = {

    register: async (req, res) => {

        try {

            const userToAdd = req.body;
            if(await authService.emailAlreadyExists(userToAdd.email)){

                res.status(409).json({ statusCode : 409, message : 'This email already exists' });

            }

            const userCreated = await authService.create(userToAdd);

            res.location(`/api/user/${userCreated._id}`);
            
            res.status(201).json({
                id: userCreated._id,
                firstname: userCreated.firstname,
                lastname: userCreated.lastname
            });

        }
        catch (err) {
            res.sendStatus(500);
        }
    },

    login: async (req, res) => {

        try {
          
            const credentials = req.body;

            const userFound = await authService.findByCredentials(credentials);

            if(!userFound) {
                res.status(401).json({ statusCode : 401, message : 'Les informations de connexion ne sont pas bonnes' });
            }
            else {
                // Create a token
                const token = await jwtUtils.generate(userFound);

                // We send the info + token
                res.status(200).json( { 
                    id : userFound._id, 
                    firstname : userFound.firstname, 
                    lastname : userFound.lastname,
                    token
                } );
            }

        }catch(err){
            console.log(err);
            res.sendStatus(500);
            
        }
    }
}

module.exports = authController;
