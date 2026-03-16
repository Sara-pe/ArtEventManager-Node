
const eventRouter = require('express').Router();
const eventController = require('../controllers/event.controller');

eventRouter.route('/')
    .get(eventController.getAll)
    .post(eventController.insert)

eventRouter.route('/:id')
    .get(eventController.getById)
    .put(eventController.update)
    .delete(eventController.delete)
    .patch(eventController.updateStatus)

eventRouter.get('/user/:name', eventController.getByUser)

// Invitations

eventRouter.route('/user/:id/invitations') 
 .get(eventController.getInvitations) //get all the invitations by user from and to
 .post(eventController.insertInvitation) //create a new invitation from an user to another user

eventRouter.route('/:id/invitations/:invitationId') 
 .patch(eventController.updateInvitation) //accept or reject and invitation

module.exports = eventRouter;