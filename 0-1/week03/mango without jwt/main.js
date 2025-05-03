const express=require("express"); 
const app=express(); 
const port=3000;

const bodyParser=require("body-parser");

const adminRouter=require("./routes/admin.js");
const userRouter=require("./routes/user.js");

app.use(bodyParser.json());


app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.listen(port,()=>{
  console.log(`main.js is ${port} is running`);
})