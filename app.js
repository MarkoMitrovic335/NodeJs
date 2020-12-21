const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config');
const app = express()
app.use(bodyParser.json())
 
const userController = require('./controllers/userController')

console.log("*** NODE JS APP STARTED ***")

app.get('/home', (req, res, next) => {

    res.send("Home page")

})

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },).then(() => {
    console.log('### Connected to database! ###')
}).catch(() => {
    console.log('### Connection to database has failed! ###');
});

app.use('/users', userController)

app.listen(8080);
