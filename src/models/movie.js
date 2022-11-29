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
    year:{
        type:Number
    },
    country:{
        type:String
    },
    genre:[{type:String}],
    duration:{
        type:String
    },
    poster:{type:String}
})

module.exports=mongoose.model("Movie",movieSchema)