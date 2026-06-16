const express = require('express');
const bankMiddlewares = require('./middlewares/bankMiddlewares');
const bankController = require('./controller/bankController');

const app = express()

app.use(express.json())

app.get('/bankAccount' , bankMiddlewares , bankController )

app.listen(5000,()=>{
    console.log("server is running")
})