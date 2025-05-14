
export const RevenueCard =({
  title,
  orderCount,
  amount
})=>{

  return(
    <div className="bg-amber-50 rounded shadow-sm p-4">

      <div className="flex text-gray-700">
        {title} ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      </div>
      <div className="flex justify-between pt-2 ">
        <div className="font-semibold text-2xl">₹ {amount} 
      </div>
       
       {orderCount  ? <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
        <div className="text-blue-700">  {orderCount} Order(s)  </div>
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

       </div> : null } 
      </div>

    </div>
  )
}