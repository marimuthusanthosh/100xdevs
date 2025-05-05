import { useState } from "react"

export function SignUp(){

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("");
  return (
    <div>
      <input 
      style={{ padding: 10, margin: 10 }}
      type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your name"/>
      <input  style={{ padding: 10, margin: 10 }}
      type="text" onChange={(e)=>setPassword(e.target.value)}
      placeholder="Enter your password"/>
      <button 
        onClick={()=>{
          fetch("http://localhost:3000/signup",{
            method:"POST",
            body: JSON.stringify({
              username:username, 
              password:password
            }),
            headers:{
              "content-type":"application/json", 
            }
          })
          .then((res) => res.json())
          .then((data) => {
            console.log("Signup success:", data);
            alert("Signup successful!");
          })
          .catch((err) => {
            console.error("Error during signup:", err);
            alert("Signup failed");
          });
        }}
      
      >SignUp</button>
    </div>
  )
}