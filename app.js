const express=require('express')
const app= express();

app.get('/',(req,res)=>{
    res.send("<h1>hello world</h1>")
})

port=3000;
app.listen(port,()=>{
    console.log(`app lisening on ${port}`);
})