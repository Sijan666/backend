// if shows dns error then use this
// require('node:dns').setServers(['1.1.1.1'],['8.8.8.8'])
const express = require('express');
const bankMiddlewares = require('./middlewares/bankMiddlewares');
const bankController = require('./controller/bankController');
const mongoose =  require('mongoose');
const {registrationController, allUserController, deleteUser, updateController} = require('./controller/registrationController');

mongoose.connect('mongodb+srv://666majharulislam_db_user:25250180@cluster0.nzekssh.mongodb.net/todo?appName=Cluster0').then(()=>{
    console.log('Database Connected');
})

const app = express()

// middleware for text to json
app.use(express.json())

app.post('/registration', registrationController)

app.get('/allUser' , allUserController)

app.delete('/user/:id', deleteUser)

app.get('/bankAccount' , bankMiddlewares , bankController )

app.post('/update/:id' , updateController)

// app.listen(5000,()=>{
//     console.log("server is running")
// })


// mongodb+srv://666majharulislam_db_user:<db_password>@cluster0.nzekssh.mongodb.net/?appName=Cluster0