
const HTTP_STATUS = require('./../constants/http-status')
const { userSchemaValidator, userLoginValidator } = require('./../models/userModel');
const logger = require('../utilities/logger')

async function prepareAddNewUserRequest(req, res, next) {
    try {
        logger.info('Inside User Middelware: prepareAddNewUserRequest method');
        if (req.body) {
            const userInputValidation = await userSchemaValidator.validateAsync(req.body);
            req.body = userInputValidation;
        }
        next();
    } catch (error) {
        logger.error(`Inside User Middelware: prepareAddNewUserRequest method:  Error occured at validating schema: ', ${error}`);
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            status: false,
            message: 'Please provide required data.'
        });
    }
}

async function prepareLoginUserRequest(req, res, next) {
    try {
        logger.info('Inside User Middelware: prepareLoginUserRequest method');

        if (req.body) {
            const userInputValidation = await userLoginValidator.validateAsync(req.body);
            req.body = userInputValidation;
        }
        next();
    }
    catch (error) {
        logger.error(`Inside User Middelware: prepareLoginUserRequest method:  Error occured at validating schema: ', ${error}`);
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            status: false,
            message: 'Please provide required data.'
        });
    }
}

module.exports = {
    prepareAddNewUserRequest,
    prepareLoginUserRequest
}