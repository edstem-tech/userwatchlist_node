const express=require('express')
const app= express();
const connectDB=require('./src/db/connect')
const userRoute=require('./src/routes/routes')

app.use(express.json());
app.use('/api/v1',userRoute);


// app.get('/',(req,res)=>{
//     res.send("<h1>hello world</h1>")
// })

port=3002;

const start=async()=>{
    try {
        await connectDB()
        app.listen(port,console.log(`server listening on port ${port}. . .`))
    } catch (error) {
        console.log(error)
    }
}
start()