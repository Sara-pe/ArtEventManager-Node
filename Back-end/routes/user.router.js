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

//post localhost:3000/api/users/
userRouter.post('/', (req, res) => {
    res.send('User succesfully added', 200)
})

module.exports = userRouter;