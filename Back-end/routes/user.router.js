const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');

userRouter.route('/')
    .get(userController.getAll)

userRouter.route('/:id') 
    .get(userController.getById) 


userRouter.route('/:id/friends/:idFriend') 
    .delete(userController.deleteFriend) 

//userRouter.route('/:id/friendRequest') 
//    .get(userController.getAllFriendRequest) 

//userRouter.route('/:id/friends') 
//    .get(userController.getAllFriends) 

userRouter.route('/:id/friendRequests/:idFriendRequest') 
    .patch(userController.updateFriendRequest) 

module.exports = userRouter;