const UserService = require('./../services/userService')
const HTTP_STATUS = require('./../constants/http-status')
const logger = require('../utilities/logger');


/**
 * @method UserController:addNewUser
 * @description Adds a new user
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns Returns a successful response with the added user 
*/
async function addNewUser(req, res) {
    try {
        logger.info('Inside UserController: addNewUser method')
        if (!req.body) throw new Error('please provide data.')
        const response = await UserService.addNewUser(req.body)

        if (!response)
            throw new Error('Error! Please try after some time.')
        return res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
        logger.error(
            `Inside UserController: addNewUser method: Error while adding new user, ${error}`
        );
    };
}

/**
 * @method UserController:loginUser
 * @description login user
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns Returns a successful response with the valid user credentials
*/
async function loginUser(req, res) {
    try {
        logger.info('Inside UserController: loginUser method')
        if (!req.body) throw new Error('please provide data.')
        const response = await UserService.loginUser(req.body)
        if (!response)
            throw new CustomError(
                'Error! Please try after some time.')
        return res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
        logger.error(
            `Inside UserController: loginUser method: Error while login, ${error}`
        );
    };
}


/**
 * @method UserController:fetchAllUsers
 * @description fetch all users
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns Returns a successful response after fetching users data
*/
async function fetchAllUsers(req, res) {
    try {
        logger.info('Inside UserController: fetchAllUsers method')
        const response = await UserService.fetchAllUsers()
        if (!response)
            throw new CustomError(
                'Error! Please try after some time.')
        return res.status(HTTP_STATUS.OK).json(response);
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