
interface User{
  firstName:string,
  secondName:string,
  age:number

}
function isLegal(user:User){

  if(user.age>18){
    console.log(user.firstName+" "+user.secondName)
  }
}

isLegal({
  firstName:"Marimuthu",
  secondName:"Santhosh",
  age:20
})