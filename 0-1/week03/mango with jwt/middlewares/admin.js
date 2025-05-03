// const {Admin}=require("../db/index")

// function adminMiddleware(req,res,next){
//   const {username,password}=req.headers;

//   Admin.findOne({
//     username:username,
//     password:password
//   }).then(function(value){

//     if(value){
//       next();
//     }
//     else{
//       res.status(403).json({
//         message:"Admin doesn't exist"
//       });
//     }

//   })
// }

// module.exports=adminMiddleware;



const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config.js");

function adminMiddleware(req,res,next){
  const token = req.headers.authorization; // bearer token
  const words = token.split(" "); // ["Bearer", "token"]
  const jwtToken = words[1]; // token

  try{
    const decodedValue= jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username){
      next();
    }
    else{
      res.status(403).json({
        message:"You are not authenticated"
      })
    }
  }catch(e){
    res.json({
      message:"Incorrect Inputs"
    })
  }
}
module.exports=adminMiddleware;