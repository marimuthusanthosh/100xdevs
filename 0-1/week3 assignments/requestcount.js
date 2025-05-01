const express=require("express");
const app=express();
const port=3000;

app.use(express.json());
var count=0;

function requestcounter(req,res,next){
    
   count++;    
  console.log(`Request count: ${count}`);
  next(); 
} 

app.get("/",requestcounter, (req,res,next)=>{
    res.send(count.toString());
    // next();
})
app.post("/abc",requestcounter, (req,res,next)=>{
    res.send(count.toString());
    // next();
})
app.put("/ab",requestcounter, (req,res,next)=>{
    res.send(count.toString());
    // next();
})
app.delete("/a",requestcounter, (req,res,next)=>{
    res.send(count.toString());
    // next();
})

app.listen(port,()=>{ 
    console.log(`Server is running on port ${port}`);
} );
