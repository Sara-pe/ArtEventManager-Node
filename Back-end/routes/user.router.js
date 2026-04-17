const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');

const authenticationMiddleware = require('../middlewares/auth/authentication.middleware');
const userAuthorizationMiddleware = require('../middlewares/auth/userAuthorization.middleware');

userRouter.route('/')
    .get(authenticationMiddleware(), userController.getAll)

userRouter.route('/:id') 
    .get(authenticationMiddleware(), userAuthorizationMiddleware(), userController.getById) 


userRouter.route('/:id/friends/:idFriend') 
    .delete(authenticationMiddleware(), userAuthorizationMiddleware(), userController.deleteFriend) 

//userRouter.route('/:id/friendRequest') 
//    .get(userController.getAllFriendRequest) 

//userRouter.route('/:id/friends') 
//    .get(userController.getAllFriends) 

userRouter.route('/:id/friendRequests/:idFriendRequest') 
    .patch(authenticationMiddleware(), userAuthorizationMiddleware(), userController.updateFriendRequest) 

//Send friendRequest
userRouter.route('/:id/friendRequests')
    .post(authenticationMiddleware(), userController.sendFriendRequest)

module.exports = userRouter;