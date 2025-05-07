// import React, { useCallback, useState } from "react";

// // Main App Component
// function App() {
//   const [counter, setCounter] = useState(0);

//   // useCallback prevents this function from being recreated on every render
//   const a = useCallback(() => {
//     console.log("hi there");
//   }, []);

//   // const a={
//   //   sum:1
//   // }

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>
//         Counter {counter}
//       </button>

//       {/* Demo component receives memoized function as prop */}
//       <Demo a={a} />
//     </div>
//   );
// }

// export default App;

// // Memoized Demo component to avoid re-render unless props change
// const Demo = React.memo(function ({ a }) {
//   console.log("Demo re-rendered"); // This will NOT log again if props don't change
//   return (
//     <div>
//       {/* Demo component rendered — {a.toString()}
//       venj */}
//       bml e
//     </div>
//   );
// });




// // import { useCallback, useState } from "react";

// // function App() {
// //   const [counter, setCounter] = useState(0);
// //   const [other, setOther] = useState(0);

// //   const logCounter = useCallback(() => {
// //     console.log("Current counter:", counter);
// //   }, [counter]); // 👈 Dependency array includes 'counter'

// //   return (
// //     <div>
// //       <button onClick={() => setCounter(counter + 1)}>
// //         Increment Counter ({counter})
// //       </button>
// //       <button onClick={() => setOther(other + 1)}>
// //         Increment Other ({other})
// //       </button>
// //       <button onClick={logCounter}>Log Counter</button>
// //     </div>
// //   );
// // // }

// // // export default App;













// import { useState } from 'react'

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   fetch("https://google.com", async (res) => {
//     const json = await res.json();
//     setBankData(json);
//     // Assume it is { income: 100 }
//   });

//   setTimeout(() => {
//     setExchangeData({ returns: 100 });
//   }, 1000);

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//       <h1>hi there, your income tax returns are {incomeTax}</h1>
//     </div>
//   );
// }
// export default App


// import React from 'react';
// import { useEffect, useCallback, useMemo, useState } from 'react';

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   // Simulating API call for exchange1
//   useEffect(() => {
//     setExchange1Data({
//       returns: 100
//     });
//   }, []);

//   // Simulating API call for exchange2
//   useEffect(() => {
//     setExchange2Data({
//       returns: 100
//     });
//   }, []);

//   // Simulating API call for bank data with timeout
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     }, 5000);

//   }, []);

//   const calculateCryptoReturns = useCallback(function() {
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data, exchange2Data])
  
//   return (
//     <div>
//       <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
//     </div>
//   )
// }
  
//   const CryptoGainsCalculator = React.memo(function({calculateCryptoReturns}) {
//     console.log("crypto child re-rendered")
//     return <div>
//       Your crypto returns are {calculateCryptoReturns()}
//     </div>
//   })

// export default App;



import { useEffect, useRef } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, []);

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App