import React from 'react';

const CreditCard = ({ clientName, cardNumber, ccv, thruDate, cardType }) => {
  return (
    <div className="bg-yellow-400 w-80 h-48 rounded-xl p-4 shadow-lg text-white relative">
      <div className="absolute top-2 right-4">
        {cardType === 'Credit' ? (
          <span className="bg-gray-800 px-2 py-1 rounded">Credit</span>
        ) : (
          <span className="bg-gray-800 px-2 py-1 rounded">Debit</span>
        )}
      </div>
      <div className="mt-4">
        {/* Espacio para el chip*/}
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
        <p className="text-lg">{clientName}</p>
      </div>
    </div>
  );
};

export default CreditCard;
