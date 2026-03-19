const { Request } = require('express')
const jwtUtils = require('../../utils/jwt.utils');

const authentificationMiddleware = () => {

    return async (req, res, next) => {

        const authorization = req.headers.authorization;

        //If the token is empty
        if (!authorization) {
            res.status(401).json({ statusCode: 401, message: 'You should be connected' })
        } else {

            //If there's the word 'Bearer' but no token afterwards 

            const token = authorization.split(' ')[1];
            // authorization is 'Bearer 38274928hdajhsd8927324987'
            //[0] "Bearer", [1] le token

            if (!token) {
                res.status(401).json({ statusCode: 401, message: 'You should be connected' })
            }

            //If there's a token -> we decode it
            try {
                const payload = await jwtUtils.decode(token); //if token made up const payload = undefined
                req.user = payload; // the info that comes with the token idUser and role
                next();

            }

            catch (err) {
                res.status(401).json({ statusCode: 401, message: 'You should be connected' })
            }
        }
    }
}

module.exports = authentificationMiddleware