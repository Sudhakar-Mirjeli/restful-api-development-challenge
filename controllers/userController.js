const UserService = require('./../services/userService')
const HTTP_STATUS = require('./../constants/http-status')
const logger = require('../utilities/logger');


// Create a new user
async function addNewUser(req, res) {
    try {
        logger.info('Inside UserController: addNewUser method')
        if (!req.body) throw new Error('please provide data.')
        const response = await UserService.addNewUser(req.body)

        if (!response)
            throw new Error('Error! Please try after some time.')
        return res.status(HTTP_STATUS.OK).json({
            status: response.status,
            message: response.message,
        });
    } catch (error) {
        logger.error(
            `Inside UserController: addNewUser method: Error while adding new user, ${error}`
        );
    };
}

// Login user
async function loginUser(req, res) {
    try {
        logger.info('Inside UserController: loginUser method')
        if (!req.body) throw new Error('please provide data.')
        const response = await UserService.loginUser(req.body)
        if (!response)
            throw new CustomError(
                'Error! Please try after some time.')
        return res.status(HTTP_STATUS.OK).json({
            status: response.status,
            token: response.token,
            message: response.message,
        });
    } catch (error) {
        logger.error(
            `Inside UserController: loginUser method: Error while login, ${error}`
        );
    };
}


// finding all users
async function fetchAllUsers(req, res) {
    try {
        logger.info('Inside UserController: fetchAllUsers method')
        const response = await UserService.fetchAllUsers()
        if (!response)
            throw new CustomError(
                'Error! Please try after some time.')
        return res.status(HTTP_STATUS.OK).json({
            status: response.status,
            data: response.data,
            message: response.message,
        });
    } catch (error) {
        logger.error(
            `Inside UserController: fetchAllUsers method: Error while fetching users, ${error}`
        );
    };
}

module.exports = {
    addNewUser,
    loginUser,
    fetchAllUsers
}