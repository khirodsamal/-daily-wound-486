const express =require("express")
const app=express()
app.use(express.json())
const  {connection}=require("./database/db")
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("wellcome")
})

const {userRouter}=require("./controller/user.rout")
// register router calling
app.use("/user",userRouter)



app.listen(process.env.port,async()=>{
  
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }

console.log(`server running  at port ${process.env.port}`)
})