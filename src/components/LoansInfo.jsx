import React from 'react'

const LoansInfo = (props) => {
  return (
    <div className="flex flex-col min-w-[28%] bg-[#1A4D2E] min-h-[25vh] m-8 border rounded-md p-2 shadow-[0_1px_10px_10px_#4F6F52] hover:scale-105">
      <h4 className="text-[#E8DFCA]">Loan Type: <span className='font-bold text-[#ffffff]'>{props.loanType}</span></h4>
      <div>
        <h4 className="text-[#E8DFCA]">Amount:</h4>
        <h1 className='font-bold text-2xl text-right w-full text-[#ffffff] my-2'>{props.amount} <span className='text-[#ffffff]'>usd</span></h1>     
      </div>        
      <p className="text-[#E8DFCA]">Approval Date: <span className='font-bold text-[#ffffff]'>{props.creationDate} </span></p>
    </div>
  )
}

export default LoansInfo