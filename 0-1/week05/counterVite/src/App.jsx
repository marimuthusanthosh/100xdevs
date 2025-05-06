
import { useState } from "react";


function App() {

  const [count,setCount]=useState(0); 
  console.log(count);
  console.log(setCount);

  function onClickHandler(){
  //  count++;
  setCount(count+1)
  }

  return (
    <div>
       {/* <button onClick={onClickHandler}>Counter {count}</button>
       <button onClick={onClickHandler}>Counter {count}</button>
       <button onClick={onClickHandler}>Counter {count}</button> */}
       <CustomButton count={count} setCount={setCount}></CustomButton>
       
    </div>
  )
}


function CustomButton(props){

  function onClickHandler(){
    //  count++;
    props.setCount(props.count+1)
    }

  return (
    <button onClick={onClickHandler}>Counter {props.count}</button>
  )

}

export default App
