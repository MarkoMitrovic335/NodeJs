const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(bodyParser.json())

const userController = require('./controller/userController')

app.get('/', (req, res, next)=>{
    res.send("Home page")
})

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },).then(() => {
    console.log('### Connected to database! ###')
}).catch(() => {
    console.log('### Connection to database has failed! ###');
});

app.use('/users', userController)

app.listen(8080);