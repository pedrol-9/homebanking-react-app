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
      <div className="mt-4">

        
        <p className="text-2xl mt-2 tracking-widest">{cardNumber}</p>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-sm">Valid Thru</p>
            <p>{thruDate}</p>
          </div>
          <div>
            <p className="text-sm">CCV</p>
            <p>{ccv}</p>
          </div>

        </div>
        <div className='flex justify-between'>
          <p className="text-lg font-bold">{clientName}</p>
          <figure className='w-[55px] mb-3' >
            <img className='mt-2' src="\assets\imgs\chip.png" alt="card chip" />
          </figure>

        </div>
        
      </div>

    </>
  )
}

export default CardContent