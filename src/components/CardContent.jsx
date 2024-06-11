import React from 'react'

const CardContent = ({clientName, cardNumber, ccv, thruDate, cardType}) => {
  return (
    <>
      <div className="absolute top-2 right-4">
        {cardType === 'CREDIT' ? (
          <span className="bg-gray-800 px-2 py-1 rounded">Credit</span>
        ) : (
          <span className="bg-gray-800 px-2 py-1 rounded">Debit</span>
        )}
      </div>
      <div className="mt-7">        
        <p className="text-2xl mt-1 tracking-widest italic">{cardNumber}</p>
        <div className="flex justify-between mt-2">
          <div>
            <p className="text-sm">Valid Thru</p>
            <p className='text-sm italic font-bold'>{thruDate}</p>
          </div>
          <div className='flex items-center'>
            <p className="text-xs mr-1">CCV</p>
            <p className='text-sm italic font-bold'>{ccv}</p>
          </div>

        </div>
        <div className='flex justify-between items-end'>
          <p className="text-lg font-bold mb-2">{clientName}</p>
          <figure className='w-[55px] mb-3' >
            <img className='mt-2' src="\assets\imgs\chip.png" alt="card chip" />
          </figure>

        </div>
        
      </div>

    </>
  )
}

export default CardContent