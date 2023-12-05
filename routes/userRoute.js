const router = require('express').Router();
const Authmiddleware = require('../utilities/authmiddleware');
const UserController = require('./../controllers/userController');
const UserMiddleware = require('./../middleware/userMiddleware')
const rateLimit = require('express-rate-limit');

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Max requests per minute
    message: 'Too many requests from this IP, please try again later.',
});

// Secure endpoint with authentication and rate limiting
// Get all users route
router.get('/', limiter,
    (req, res, next) => Authmiddleware.authenticate(req, res, next),
    (req, res) => UserController.fetchAllUsers(req, res));

// Adding new user route
router.post('/register',
    (req, res, next) => UserMiddleware.prepareAddNewUserRequest(req, res, next),
    (req, res) => UserController.addNewUser(req, res));

// User login route
router.post('/login',
    (req, res, next) => UserMiddleware.prepareLoginUserRequest(req, res, next),
    (req, res) => UserController.loginUser(req, res));


module.exports = router