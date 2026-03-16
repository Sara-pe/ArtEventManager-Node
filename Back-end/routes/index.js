const authRouter = require('./auth.router');
const eventRouter = require('./event.router');
const userRouter = require('./user.router');

//1) Create an object router 

const router = require ('express').Router();

//2) Configure the routes
router.get('/', (req, res) => {
    res.send("Welcome to the API artEventPlanner", 200)
});

router.use('/events', eventRouter);

router.use('/auth', authRouter);

router.use('/users', userRouter);

// 3) Export the object router
module.exports = router;