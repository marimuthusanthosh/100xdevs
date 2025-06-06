const mongoose=require("mongoose"); 


mongoose.connect("mongodb+srv://msanthoshhh:Rockmadhav123@cluster0.z7pts0d.mongodb.net/course_selling_app_with_jwt");


const AdminSchema=new mongoose.Schema({
  username:String,
  password:String
});

const UserSchema=new mongoose.Schema({
  username:String,
  password:String,
  purchasedCourses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }]
})

const Courschema=new mongoose.Schema({
  title:String, 
  description:String,
  price:Number,
  imageLink:String
});

const Admin=mongoose.model('Admin',AdminSchema)
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',Courschema)

module.exports={
  Admin,User,Course
}



