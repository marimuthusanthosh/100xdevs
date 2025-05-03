// const {User}=require("../db/index")



// function userMiddleware(req,res,next){
//   const {username,password}=req.headers;

//   User.findOne({
//     username:username,
//     password:password
//   }).then(function(value){

//     if(value){
//       next();
//     }
//     else{
//       res.status(403).json({
//         message:"User doesn't exist"
//       });
//     }

//   })
// }

// module.exports=userMiddleware;


const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config.js");

function userMiddleware(req,res,next){
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
module.exports=userMiddleware;