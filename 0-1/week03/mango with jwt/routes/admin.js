const express=require("express"); 
const router=express.Router();
const z=require("zod");
const {JWT_SECRET}=require("../config.js")
const jwt=require("jsonwebtoken");

const {Admin,User,Course}=require("../db/index")

router.use(express.json());
const adminMiddleware=require("../middlewares/admin")

const adminSignupSchema=z.object({
  username:z.string().min(3),
  password:z.string().min(3)
});
const courseCreationSchema=z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  price: z.number().positive(),
  imageLink: z.string()
}); 

router.post("/signin", async (req,res)=>{

  const {username,password}=req.body;

  const user =await Admin.findOne({
    username,
    password
  })
  
  if(user){
    const token =jwt.sign({
      username
    },JWT_SECRET)
    res.json({
      token
    })
  }
  else{
    res.status(411).json({
      message:"Incorrect username or password"
    })
  }
});
router.post("/signup",async (req,res)=>{

  const parseResult=adminSignupSchema.safeParse(req.body);
  
  if(!parseResult.success){
    return res.status(400).json({
      error: "wrong input format"
    })
  }

  const {username, password}=parseResult.data;

   const response= await Admin.create({
    username,password
   })
   
   res.json({
    message:"Admin created Successfully"
   })

   console.log(response);
})

router.post("/createCourse",adminMiddleware,async (req,res)=>{

  const parseResult=courseCreationSchema.safeParse(req.body);
  
  if(!parseResult.success){
    return res.status(400).json({
      error: "wrong input format"
    })
  }

  const {title,description,price,imageLink}=parseResult.data;

  const response = await Course.create({
    title,description,price,imageLink
  })
  res.json({
    message:"Course created Successfully"
  }); 
  console.log(response);

})

router.get("/courses",adminMiddleware, async (req,res)=>{

  const response =await Course.find({});
       res.json({
        courses:response
       })
});
module.exports=router;