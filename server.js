const express =require ('express')
const app =express();
const db = require('./db')
require("dotenv").config();
const passport =require ('./auth')
const user =require ('./models/user')


const bodyParser= require('body-parser');
const { Session } = require('inspector');
app.use(bodyParser.json());
const PORT =process.env.PORT||3000;

const logRequest = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()}Requeest made to${req.originalUrl}`)
    next()
}

app.use(logRequest);





app.use(passport.initialize());



app.get('/',passport.authenticate('local',{Session:false}),function(req,res){
    res.send ("welcome man")
})

app.get('/',passport.authenticate('local',{Session:false}),function(req,res){
    res.send ("sure sir")
})

app.get ('/idli',(req,res)=>{
    var custoidli={
        name:"rava",
        sixe:10
    }
    res.send(custoidli)
})



app.listen (3000,()=>{
    console.log("server up")
});
