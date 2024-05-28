const { error } = require("console")
const mongoose =require("mongoose")
require('dotenv').config()


const mongoURI=process.env.MONGODB_URI
mongoose.connect(mongoURI)//{
  // useNewUrlParser:true,
    //useUnifinedTopology:true
//})

const db = mongoose.connection

db.on('connected',()=>{
   console.log('mongo connected')
})

db.on('error',(error)=>{
    console.log('mongo error',error)
})

db.on('disconnected',()=>{
    console.log('mongo db disconnected')
})

module.exports=db;