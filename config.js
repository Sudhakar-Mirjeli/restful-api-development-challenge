require('dotenv').config();
const assert = require('assert')

const { PORT, MONGODB_URI, JWT_SECERET_KEY } = process.env;

assert(PORT, 'PORT is required!')
assert(MONGODB_URI, 'Mongo URI is required!')


module.exports = {
    SERVER: {
        PORT: PORT,
        JWT_SECERET_KEY: JWT_SECERET_KEY
    },
    DATA_BASE: {
        MONGODB_URI: MONGODB_URI
    },

}