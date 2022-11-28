const mongoose=require("mongoose");


const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    director:{
        type:String,
    },
    description:{
        type:String
    },
    Year:{
        type:Number
    },
    country:{
        type:String
    },
    genre:[],
    duration:{
        type:String
    },
    poster:{type:String}
})

module.exports=mongoose.model("Movie",movieSchema)