const mongoose=require("mongoose")

const userShema=mongoose.Schema({
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
const userModel=mongoose.model("user",userShema)
module.exports={userModel}
