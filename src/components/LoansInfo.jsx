import React from 'react'

const LoansInfo = (props) => {
  return (
    <div className="flex flex-col w-[25%] bg-[#1A4D2E] min-h-[25vh] m-8 border rounded-md py-2 shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"> 
      <h4 className="bg-[#E8DFCA] text-[#1A4D2E] text-center font-extrabold px-2 py-1 mb-2 inline-block ">
        {props.loanType}
      </h4>
      
      <div className='px-4 pb-4'>
        <div className="flex justify-between items-center mt-8">          
          <h4 className="bg-[#E8DFCA] text-[#1A4D2E] px-2 py-1 rounded inline-block">Amount:</h4>
          <h1 className='font-bold text-3xl text-right text-[#ffffff] italic'>
            <span className='text-sm text-[#E8DFCA]'>USD </span> {"$" + props.amount.toLocaleString('en-US')} 
          </h1>
        </div>

        <hr className='mt-2 border-dotted'/>

        <div className='flex justify-between items-center mt-8'>
          <h4 className="bg-[#E8DFCA] text-[#1A4D2E] px-2 py-1 rounded inline-block">
            Installments:
          </h4>
          <p className='font-bold text-[#ffffff]'>{props.payments}</p>
        </div>

        <hr className='mt-2 border-dotted'/>

      </div>
    </div>
  )
}

export default LoansInfo

{/* <div className="flex flex-col min-w-[28%] bg-[#1A4D2E] min-h-[25vh] m-8 border rounded-md p-2 shadow-[0_1px_10px_10px_#4F6F52] hover:scale-105">

<h4 className="text-[#E8DFCA]">Loan Type: <span className='font-bold text-[#ffffff]'>{props.loanType}</span></h4>

<div>
  <h4 className="text-[#E8DFCA]">Amount:</h4>
  <h1 className='font-bold text-2xl text-right w-full text-[#ffffff] my-2'>{props.amount} <span className='text-[#ffffff]'>usd</span></h1>
</div>

<p className="text-[#E8DFCA]">Intallments: <span className='font-bold text-[#ffffff]'>{props.payments}</span></p>

</div > */}