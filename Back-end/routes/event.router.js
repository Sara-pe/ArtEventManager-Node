
const eventRouter = require('express').Router();
const eventController = require('../controllers/event.controller');

eventRouter.route('/')
    .get(eventController.getAll)
    .post(eventController.insert)

eventRouter.route('/:id') //id=eventId
    .get(eventController.getById)
    .put(eventController.update)
    .delete(eventController.delete)

eventRouter.get('/user/:idUser', eventController.getByUser)

// Invitations

eventRouter.route('/user/:id/invitations') 
 .get(eventController.getInvitations) //get all the invitations by user from and to

eventRouter.route('/:id/invitations') 
 .post(eventController.insertInvitation) //create a new invitation 

eventRouter.route('/:eventId/invitations/:invitationId') 
 .patch(eventController.updateInvitation) //accept or reject and invitation

module.exports = eventRouter;