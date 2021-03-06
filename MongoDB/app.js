const express = require('express')
const mongoose = require('mongoose')
const app = express()
const index = require('./router/index')
const movie = require('./router/movies')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/movieList')

mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',index)
app.use('/api',movie)

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

const port = process.env.PORT || 3000

app.listen(3000,() => {
    console.log("app listenning on port 3000")
})


module.exports = app
