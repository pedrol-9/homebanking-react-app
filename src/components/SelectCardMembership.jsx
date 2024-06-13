import React from 'react';

const SelectCardMembership = (props) => {
  return (
    <label className={"flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 " + (props.style || "")}>
      Select card membership
      <select className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
        onChange={(e) => props.onChange(e)}>
        <option value="gold" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Gold</option>
        <option value="platinum" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Platinum</option>
        <option value="silver" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">Silver</option>
      </select>
    </label>
  );
};

export default SelectCardMembership;
