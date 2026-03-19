const User = require('../../models/user.model')

const userAuthorizationMiddleware = () => {

    return async (req, res, next) => {


        // ? 1) Id from the route
        const userRouterId = req.params.id || req.params.idUser;

        // ? 2) Id from the token
        const userId = req.user.id;

        try {

            // We do the token again in case the role it changed while being connected
            const tokenUser = await User.findById(userId);

            if (!tokenUser) {

                res.status(404).json({ statusCode: 404, message: 'Your token does not exist' })

            } else {

                // If the user exists and is admin
                if (tokenUser.role === 'Admin') {
                   
                    next();
                } else if (userId === userRouterId) {
                    next();
                } else {
                    res.status(403).json({ statusCode: 403, message: 'You do not have the right to access the data' })
                }
            }
        } catch (err) {

            res.status(500).json({ statusCode: 500, message: 'Error in the database' })
        }


    }
}

module.exports = userAuthorizationMiddleware;