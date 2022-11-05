const express = require('express')
const app = express()
const path = require('path')

var http = require("http"); 

const mongoose=require('mongoose')
require('./db')

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// app.post('/agentprofile', (req, res) => {
//     res.send(`Full name is:${req.body.name} 
//     ${req.body.place} 
//     ${req.body.mobile_number} 
//     ${req.body.email}
//     ${req.body. bank_detail}`);
//   });

const static_path = path.join(__dirname, "../public")

app.use(express.static(static_path))
app.set("view engine", "hbs")

app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/agentprofile", (req,res)=>{
    res.render("agentprofile")
})
app.get("/studentprofile", (req,res)=>{
    res.render("studentprofile")
})

app.get("/status",(req,res)=>{
    res.render("status")
})







const userRouter = require('./routes/routes')
app.use(userRouter)


app.listen(4000, function(){
    console.log('Server is Running on port 4000..!')
})