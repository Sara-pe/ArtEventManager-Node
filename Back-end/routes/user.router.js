const express = require('express');
const userRouter = express.Router();

//localhost:3000/api/users
userRouter.get('/', (req, res) => {
    res.send('Hereby all the users', 200)
})

// :id dinamic segment
//localhost:3000/api/users/XX
userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hereby the user number ${id}`)
})

// TO DO 

// 1. getAll users - //localhost:3000/api/users

// 2. getAllFriends by User - //localhost:3000/api/users/XX
// 3. deleteFriends by User 
// 4. getAllFriendRequests by User 
// 5. patchFriendRequest by User and FriendRequest - If accepted user.from becomes friend


module.exports = userRouter;