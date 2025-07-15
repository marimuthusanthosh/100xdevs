import React from 'react';

export default function ({children}:{children: React.ReactNode}){
  return(
    <div>

    <div className="border-b p-1 text-center">
      20% OFF for the next 10 days
    </div>
    {children}
    </div>
  )
}