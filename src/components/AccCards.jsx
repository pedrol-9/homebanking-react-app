import React from 'react';

const AccCards = (props) => {

  const formatAmount = (amount) => {
    return typeof amount === 'number' ? amount.toLocaleString('en-US') : '0.00';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  return (
    <div className="flex flex-col w-9/12 md:w-4/12 xl:w-3/12 bg-[#1A4D2E] m-10 border rounded-md py-2 shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"  onClick={props.onClick}>
      <h4 className="bg-[#E8DFCA] text-[#1A4D2E] text-center font-extrabold px-2 py-1 mb-2 inline-block ">{props.accNumber}</h4>

      <div className='px-4 pb-4'>
        <div className="flex justify-between items-center mt-8">
          <h4 className="bg-[#E8DFCA] text-[#1A4D2E] px-2 py-1 rounded inline-block">Amount:</h4>
          <h1 className='font-bold xs:text-xl md:text-2xl xl:text-3xl text-right text-[#ffffff] italic'>
            <span className='text-sm text-[#E8DFCA]'>USD </span>{"$" + formatAmount(props.amount)}
          </h1>
        </div>

        <hr className='mt-2 border-dotted'/>

        <div className='flex justify-between items-center mt-8'>
          <h4 className="bg-[#E8DFCA] text-[#1A4D2E] px-2 py-1 rounded inline-block">Creation Date:</h4> 
          <p className='font-bold text-[#ffffff]'>{formatDate(props.creationDate)}</p>          
        </div>

        <hr className='mt-2 border-dotted'/>

      </div>

    </div>
  );
}

export default AccCards;
