const {Admin}=require("../db/index")



function adminMiddleware(req,res,next){
  const {username,password}=req.headers;

  Admin.findOne({
    username:username,
    password:password
  }).then(function(value){

    if(value){
      next();
    }
    else{
      res.status(403).json({
        message:"Admin doesn't exist"
      });
    }

  })
}

module.exports=adminMiddleware;