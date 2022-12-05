const mongoose=require("mongoose");


const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },year:{
        type:String
    },
    Released:{type:String},
    runtime:{
        type:String
    }, 
    genre:[{type:String}],
    director:{
        type:String,
    },
    writer:{type:String},
    actors:{type:String},
    plot:{
        type:String
    },
    language:{type:String},
    
    country:{
        type:String
    },
   
    
    poster:{type:String}
})

module.exports=mongoose.model("Movie",movieSchema)