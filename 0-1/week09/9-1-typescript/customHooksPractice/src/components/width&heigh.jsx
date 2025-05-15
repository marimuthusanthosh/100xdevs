import { useEffect, useState } from "react";

function useDimensions(){

  const [size,setSize]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  })

  useEffect(()=>{
    const handleResize =()=>{
      setSize({
      width:window.innerWidth,
      height:window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)

    return ()=>{
      window.removeEventListener("resize",handleResize);
    }
  },[])
  return size;

}
function App(){

  const {width,height}=useDimensions();

  return(
    <div>
      width:{width}px
      height:{height}px
    </div>
  )

}

export default App