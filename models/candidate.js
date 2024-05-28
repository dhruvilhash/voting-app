const mongoose =require('mongoose');
const { type } = require('os');

const candidateSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    party:{
        type:String,
        requires:true
    },
    age:{
        type:Number,
        required:true
    },
    votes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
            },
            votedAt:{
                type:Date,
                default:Date.now()
            }
        }
    ],
    votedCount:{
        type:Number,
        default:0
    }
})


const Candidate = mongoose.model("Candidate",candidateSchema);
module.exports= Candidate;