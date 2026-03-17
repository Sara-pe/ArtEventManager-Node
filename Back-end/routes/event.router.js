
const eventRouter = require('express').Router();
const eventController = require('../controllers/event.controller');

const idValidatorMiddleware = require('../middlewares/idValidator.middleware');

eventRouter.route('/')
    .get(eventController.getAll)
    .post(eventController.insert)

eventRouter.route('/:id') //id=eventId
    .get(idValidatorMiddleware(), eventController.getById)
    .put(idValidatorMiddleware(), eventController.update)
    .delete(idValidatorMiddleware(), eventController.delete)

eventRouter.get('/user/:idUser', eventController.getByUser)


// Events invitations 

eventRouter.route('/user/:id/invitations') 
 .get(eventController.getInvitations) //get all the invitations by user from and to

eventRouter.route('/:id/invitations') 
 .post(eventController.insertInvitation) //create a new invitation 

eventRouter.route('/:eventId/invitations/:invitationId') 
 .patch(eventController.updateInvitation) //accept or reject and invitation

module.exports = eventRouter;