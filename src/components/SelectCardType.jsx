import React from 'react';

const SelectCardType = (props) => {
  return (
    <label className={"flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 " + (props.style || "")}>
      <select
        id="card-type"
        className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      >
        <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select a card type</option>
        <option value="debit" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Debit card</option>
        <option value="credit" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Credit card</option>
      </select>
    </label>
  );
};

export default SelectCardType;


/* import React from 'react';

const SelectCardType = (props) => {
  return (
    <label className={"flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 " + (props.style || "")}>
      Select card type
      <select id="card-type" className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
        onChange={(e) => props.onChange(e)}>
        <option value="debit" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Debit card</option>
        <option value="credit" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Credit card</option>
      </select>
    </label>
  );
};

export default SelectCardType; */

