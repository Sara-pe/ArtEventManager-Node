const eventRouter = require('express').Router();
const eventController = require('../controllers/event.controller');

const authenticationMiddleware = require('../middlewares/auth/authentication.middleware');
const userAuthorizationMiddleware = require('../middlewares/auth/userAuthorization.middleware');

// Specific routes
eventRouter.get('/user/:idUser', authenticationMiddleware(), userAuthorizationMiddleware(), eventController.getByUser)

eventRouter.route('/user/:id/invitations') 
    .get(authenticationMiddleware(), userAuthorizationMiddleware(), eventController.getInvitations) //get all the invitations by user from and to

// Generic routes
eventRouter.route('/')
    .get(eventController.getAll)
    .post(authenticationMiddleware(), eventController.insert)

eventRouter.route('/:id') //id=eventId
    .get(authenticationMiddleware(), eventController.getById)
    .put(authenticationMiddleware(), eventController.update)
    .delete(authenticationMiddleware(), eventController.delete)

// Events invitations - specific routes 
eventRouter.route('/:id/invitations') 
    .post(authenticationMiddleware(), eventController.insertInvitation) //create a new invitation 

eventRouter.route('/:eventId/invitations/:invitationId') 
    .patch(authenticationMiddleware(), eventController.updateInvitation) //accept or reject an invitation

module.exports = eventRouter;