import React from 'react'

const AccCards = (props) => {

  return (
    <div className="flex flex-col min-w-[28%] bg-[#1A4D2E] min-h-[25vh] m-8 border rounded-md p-2 shadow-[0_1px_10px_10px_#4F6F52] hover:scale-105">
      <h4 className="text-[#E8DFCA]">Account Number: <span className='font-bold text-[#ffffff]'>{props.accNumber}</span></h4>
      <div>
        <h4 className="text-[#E8DFCA]">Amount:</h4>
        <h1 className='font-bold text-2xl text-right w-full text-[#ffffff] my-2'>$2500.00 <span className='text-[#ffffff]'>usd</span>{props.amount}</h1>     
      </div>        
      <h4 className="text-[#E8DFCA]">Creation Date: <span className='font-bold text-[#ffffff]'>{props.creationDate}</span></h4>
    </div>
  )
}

export default AccCards