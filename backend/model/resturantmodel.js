const mongoose=require("mongoose")

const retsurantSchema=mongoose.Schema({
    image:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    rating:{
        type:Number,

    },
    price:{
        type:Number
    }

},{
    versionKey:false
})

const restaurantModel= mongoose.model("restaurant",retsurantSchema)

module.exports={restaurantModel}