let express=require("express")
const adminRouter=express.Router()
const {adminModel}=require("../model/adminmodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

adminRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    try {
        if(!name){
            return res.status(400).send({"message":"name is required"})
        }
        if(!email){
            return res.status(400).send({"message":"email is required"})
        }
        if(!password){
            return res.status(400).send({"message":"password is required"})
        }
        // checking is there any email id available or not 
        const existemail=await adminModel.findOne({email})
        console.log(existemail)
        if(existemail){
            return res.status(400).send({"message":"email is already present please login "})
        }
        // encode the password and store
        bcrypt.hash(password,7,async(error,hash)=>{
            if(error){
                return res.status(500).send({"message":"something went wrong"})
            }
            // send the data to the database
            const user=new adminModel({name,email,password:hash})
            await user.save()
            res.status(200).send({"message":"signup successfull"})

        })
    } catch (error) {
        res.status(500).send({"message":"something went wrong"})
        console.log(error)
    }
})
// login roughter
adminRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(!email){
        return res.status(400).send({"message":"enter email"})
    }
    if(!password){
        return res.status(400).send({"message":"enter password"})
    }
    try {
        const user=await adminModel.findOne({email})
        if(user){

            bcrypt.compare(password,user.password,(err,result)=>{
              if(result){
                    const token =jwt.sign({"name":"khirod"},"masai",{expiresIn:"1h"})
                    res.status(200).send({"message":"login successfull","token":token})
                }else {
                    return res.status(400).send({"message":"incorrect password"})
                }
                
            })
        }else{
            res.status(400).send({"message":"incorrect emailid"})
        }
    } catch (error) {
        res.status(500).send({"message":"something went wrong"})
        console.log(error)
    }
})

module.exports={adminRouter}