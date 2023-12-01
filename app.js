const config = require('./config')
const express = require('express');
const mongoose = require('mongoose')
const bodyParser =require('body-parser')
const cors = require('cors');

const app = express();
const routes = require('./routes/routes')

app.use(cors())

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.use('/api', routes)


// Connect to MongoDB
mongoose.connect(config.DATA_BASE.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.info(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`)
    console.info(` Data Base connection successfull. `)
    console.info(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`)
})

mongoose.connection.on('error', (err) => {
    console.info(`***********************************`)
    console.info(` Failed to connect MongoDB. ${err} `)
    console.info(`*************************************`)
})


app.listen(config.SERVER.PORT, () => {
    console.info(`############################################`)
    console.info(` Server is running on ${config.SERVER.PORT} successfully. `)
    console.info(`############################################`)
})

module.exports = app;