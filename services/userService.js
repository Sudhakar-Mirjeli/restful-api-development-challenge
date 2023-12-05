const { UserModel } = require('../models/userModel');
const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const logger = require('../utilities/logger');

/**
* @method UserController:addNewUser
* @description addig new user to database
* @returns {Object} Object with the status, message
*/
async function addNewUser(userRQ) {
    try {
        logger.info('Inside UserService: addNewUser method')

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ "$or": [{ userName: userRQ.userName.toLowerCase() }, { email: userRQ.email }] });

        if (existingUser) {
            return { status: false, message: 'User already exists.' };
        }

        // Hashing the password before saving.
        const saltRounds = 10; // The number of salt rounds
        const hashedPassword = await bcrypt.hash(userRQ.password, saltRounds);

        // Create a new user with the hashed password
        const newUser = new UserModel({
            userName: userRQ.userName,
            email: userRQ.email,
            password: hashedPassword
        });
        await newUser.save();
        return {
            status: true,
            message: 'User registered successfully.'
        };

    } catch (error) {
        logger.error(`Inside UserService: addNewUser method: ${error}`)
        return { success: false, message: 'An error occurred during adding new user.', error: error };
    }
}


/**
* @method UserController:loginUser
* @description login user with valid credentials
* @returns {Object} Object with the status, message & token
*/
async function loginUser(userRQ) {
    try {
        logger.info('Inside UserService: loginUser method')

        const doesUserExist = await UserModel.findOne({ userName: userRQ.userName.toLowerCase().trim() });
        if (doesUserExist) {
            // Compare the hashed password with the provided password
            const isPasswordValid = await bcrypt.compare(userRQ.password, doesUserExist.password);

            if (!isPasswordValid) {
                return { status: false, message: 'Invalid password.' };
            }

            const payload = {
                userId: doesUserExist._id,
                userName: doesUserExist.userName,
                email: doesUserExist.email
            };

            const token = jwt.sign(payload, config.SERVER.JWT_SECERET_KEY, { expiresIn: '1d' });
            return {
                status: true,
                token: token,
                message: 'login successfull.'
            }

        } else {
            return {
                status: false,
                message: 'please enter valid credentials'
            }
        }
    } catch (error) {
        logger.error(`Inside UserService: loginUser method: ${error}`)
        return {
            status: false,
            message: "Failed to login"
        };
    }
}


/**
* @method UserController:fetchAllUsers
* @description fetching all users from the database
* @returns {Object} Object with the status, message & users data
*/
async function fetchAllUsers() {
    try {
        logger.info('Inside UserService: fetchAllUsers method')
        const users = await UserModel.find({});
        return {
            status: true,
            data: users,
            message: 'Users retrieved successfully.'
        };
    }
    catch (error) {
        logger.error(`Inside UserService: fetchAllUsers method: ${error}`)
        return { status: false, message: 'An error occurred while retrieving.', error: error };
    }
}

module.exports = {
    addNewUser,
    loginUser,
    fetchAllUsers
};
