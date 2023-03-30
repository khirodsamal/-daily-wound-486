// const jwt=require("jsonwebtoken")
// const authenticate=(req,res,next)=>{
//   const token=req.headers.authorization
//   if(token){
//     const decoded=jwt.verify(token,"masai")
//     if(decoded){
//         next()
//     }else{
//         return res.status(400).send({"message":"please signin"})
//     }
//   }else{
//     return res.status(400).send({"message":"please signin"})
//   }
// }

// module.exports={authenticate}