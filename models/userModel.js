const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timeStamps: true })

const UserModel = mongoose.model('users', userSchema);

// user schema validator.
const userSchemaValidator = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 1 }),
    password: Joi.string().trim()
})

// user login requet validator
const userLoginValidator = Joi.object({
    userName: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 1 }),
    password: Joi.string().required()
})

module.exports = {
    UserModel,
    userSchemaValidator,
    userLoginValidator
}