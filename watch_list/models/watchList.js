const mongoose = require("mongoose");

import("../models/user");
const watchlistSchema =new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  movieName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required:true
  },
  poster: { type: Schema.Types.ObjectId, ref: "Movie" },
  Watched: {
    type: Boolean,
  },
  
},{ timestamps: true });

module.exports=mongoose.model("WatchList",userSchema);