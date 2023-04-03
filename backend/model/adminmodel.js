const mongoose=require("mongoose")

const adminShema=mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
},{
    versionKey:false
})
const adminModel=mongoose.model("admin",adminShema)
module.exports={adminModel}
