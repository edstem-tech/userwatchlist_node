const mongoose=require("mongoose");

const reviewSchema= new mongoose.Schema({
user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
movie:{type:mongoose.Schema.Types.ObjectId,ref:'Movie',required:true},
rating:{type:Number,required:true,min:1,max:10},
review:{type:String,required:true,trim:true}

})

module.exports=mongoose.model("Review",userSchema);