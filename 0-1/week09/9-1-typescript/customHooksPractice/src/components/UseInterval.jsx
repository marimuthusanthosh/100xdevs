import {useEffect, useState } from "react";

function useInterval(fn,delay){

  useEffect(()=>{

    const id=setInterval(()=>{
      fn()
    },delay)

    return()=>{

      clearInterval(id)
    }

  },[])
}

function App(){

  const [count,setCount]=useState(0)

  useInterval(()=>{
   
    setCount(c=>c+1);
  },1000)

  return(
    <div>
     Timer : {count}
    </div>
  )
}

export default App