import React from 'react'

const AvailableLoansInfo = (props) => {
  return (
    // transform transition-transform duration-300 ease-in-out hover:scale-105
    <div className='flex flex-col border-[#695608] border-[3px] w-11/12 bg-[#F5EFE6] m-8 border rounded-md py-2 shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out hover:scale-105'>

      <h4 className="bg-[#695608] text-white text-center xs:text-2xl md:text-3xl font-extrabold px-2 py-1 mb-2 inline-block ">
        {props.loanType}
      </h4>
      
      <div className='px-4 pb-4'>
        <div className="flex justify-between items-center mt-8">          
          <h4 className="bg-[#695608] text-xl text-[#ffffff] font-bold px-2 py-1 rounded inline-block">Limit Amount:</h4>
          <h1 className='font-bold text-3xl text-right text-[#695608] italic'>
            <span className='text-sm text-[#695608]'>USD </span> {"$" + props.amount.toLocaleString('en-US')} 
          </h1>
        </div>

        <hr className='mt-2 border-dotted border-[#695608]'/>

        <div className='flex justify-between items-center mt-8'>
          <h4 className="bg-[#695608] text-xl text-[#ffffff] font-bold px-2 py-1 rounded inline-block">
            Installments:
          </h4>
          <p className='font-bold text-[#695608] '>{props.payments}</p>
        </div>

        <hr className='mt-2 border-dotted border-[#695608]'/>

      </div>
    </div>
  )
}

export default AvailableLoansInfo
