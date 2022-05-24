const { render } = require('ejs');
const express = require ('express');
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser");

const userController = require("./controllers/userController");

app.set("view engine", "ejs")

mongoose.connect('mongodb://127.0.0.1:27017/Users').then(()=>{
    console.log("Connected")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('create')
})

app.post(
    "create",
    userController.create
  );

// app.get('/',(req,res)=>{
//     res.render('index')
// })

app.get('/details',(req,res)=>{
    res.render('details')
})

app.listen(3000,()=>{
    console.log("Listening")
})