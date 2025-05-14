const axios=require("axios")


async function main(){

  const response=await fetch("https://api.thecatapi.com/v1/images/search",{
    method:"PUT"
  }); 
  const json=await response.json(); 
  console.log(json)

}
// async function main(){
//   const response=await axios.get("https://api.thecatapi.com/v1/images/search"); 
//   console.log(response.data);

// }

main();