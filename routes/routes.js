const router = require('express').Router()
const UserRoutes = require('./userRoute')

router.use('/user',UserRoutes)

module.exports = router