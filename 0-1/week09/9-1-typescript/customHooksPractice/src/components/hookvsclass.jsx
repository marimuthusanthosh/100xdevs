
// function App() {

//   const [count,setCount]=useState(0)
   
//  function Increment(){
//   setCount(count+1);
//  } 


//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={Increment}>Click Me</button>
      
//     </div>
//   )
// }

// export default App
// import React from 'react';

// class App extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     this.state= {count:0};
//   }
//   IncrementCout= ()=>{
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//   return(
//     <div>
//     <p>{this.state.count}</p>
//     <button onClick={this.IncrementCout}>Click ME</button>
//     </div>
//   )
//   }

// }

// export default App

import React, { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(prev => !prev); // toggle visibility
    }, 5000);

    return () => clearInterval(timer); // clean up
  }, []);

  return (
    <div>
      {show && <Mycomponent />}
    </div>
  );
}

// function Mycomponent() {
//   useEffect(() => {
//     console.log("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return (
//     <div>
//       From inside my component
//     </div>
//   );
// }

// export default App;

class Mycomponent extends React.Component{
  
  componentDidMount(){
    console.log("component mounted")
  }
  componentWillUnmount(){
    console.log("component unmount")
  }
  
  render(){
    return(
      <div>
        hi there
      </div>
    )
  }
  
}

export default App;