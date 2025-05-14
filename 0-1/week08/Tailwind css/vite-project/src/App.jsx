import { RevenueCard } from "./components/revenueCard";

function App() {
  return (

    <div className="grid grid-cols-3">

    {/* <div className="grid grid-cols-10">
      <div className="bg-red-500 col-span-4">hit 1</div>      
      <div className="bg-green-500 col-span-4">hit 2</div>      
      <div className="bg-yellow-500 col-span-2">hit 3</div>      
    </div>

    <div className="flex">
      <div className="bg-red-500 w-[40%]">hello</div>
      <div className="bg-yellow-500 w-[40%]">hello</div>
      <div className="bg-green-500 w-[40%]">hello</div>

    </div> */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3">
    <div className="bg-red-500 p-4">hi there</div>
    <div className="bg-yellow-500 p-4">hi there</div>
    <div className="bg-green-500 p-4">hi there</div>
    </div> */}

    <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>

    </div>
  );
}

export default App;
