const express=require("express")
const resrout=express.Router()
const {restaurantModel}=require("../model/resturantmodel")
const {authenticate}=require("../middleware/auth")


resrout.post("/add",authenticate,async(req,res)=>{

    try {
      const restaturants=req.body
      await restaurantModel.insertMany(restaturants);
        res.status(200).send({"message":"add successfull"})
    } catch (error) {
        res.status(500).send({"message":"something went wrong"})
        console.log(error)
    }
})

resrout.get("/",authenticate,async(req,res)=>{
    try {
        let data=await restaurantModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({"message":"something went wrong"})
        console.log(error)
    }
})
 resrout.patch("/update",authenticate,async(req,res)=>{
    const payload=req.body
    const resid=req.body.id
    console.log(resid)
    try {
        const updaterestaurant=await restaurantModel.findByIdAndUpdate(resid,payload,{
            new:true
        })
        if(!updaterestaurant){
            return res.status(404).send({"message":"restaurant not present"})
        }
        res.status(200).send({"message":"product updatae successfully"})
    } catch (error) {
        res.status(500).send({"message":"internal server error"})
        console.log(error)
    }
 })


module.exports={resrout}