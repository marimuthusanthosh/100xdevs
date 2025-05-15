import { useEffect, useState } from "react";


function useDebounceValue(value,delay){

  const [debounce,setDebounce]=useState(value)

  useEffect(()=>{

    const id=setTimeout(()=>{
      setDebounce(value)
    }, delay)

    return()=>{
      clearTimeout(id)
    }



  },[value,delay])

  return  debounce;
}

function App(){


  const [inputValue,setInputValue]=useState(" "); 
  const debounceValue=useDebounceValue(inputValue,5000); 
  
  return(
    <div>
    <input type="text" 
    value={inputValue}
    onChange={(e)=>{
      setInputValue(e.target.value)
    }}  placeholder="Search"/>

    <p>Debounced : {debounceValue}</p>
    </div>
  )
}

export default App