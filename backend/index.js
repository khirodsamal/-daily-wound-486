const express =require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())
const  {connection}=require("./database/db")
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("wellcome")
})

const {userRouter}=require("./controller/user.rout")
// register router calling
app.use("/users",userRouter)

const {resrout}=require("./controller/restaurant.rout")
app.use("/restaurant",resrout)

const {adminRouter}=require("./controller/adminrout")
app.use("/admin",adminRouter)

app.listen(process.env.port,async()=>{
  
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }

console.log(`server running  at port ${process.env.port}`)
})