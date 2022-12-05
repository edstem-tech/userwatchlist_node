const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model("User",userSchema);