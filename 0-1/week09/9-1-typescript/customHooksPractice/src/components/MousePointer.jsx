import { useEffect, useState } from "react";






function useMousePointer(){

  const [mouseOver, setmouseOver]=useState({x:0,y:0})

  const handleMouseMove=(e)=>{
    setmouseOver({x:e.clientX, y: e.clientY}); 
  }

  useEffect(()=>{

    window.addEventListener("mouseover",handleMouseMove); 

    return ()=>{
      window.removeEventListener("mousemove",handleMouseMove);
    }

  },[])
  return mouseOver
}
function App(){

  const mousePointer=useMousePointer();


  return(
    <div>
      your mouse position is {mousePointer.x} {mousePointer.y}

    </div>
  )
}

export default App;