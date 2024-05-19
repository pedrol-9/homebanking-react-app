import React from 'react'

const SelectCardType = () => {
    return (
        <>
            <label for="card-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select card Type</label>
            <select id="card-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>e.g.: Credit card</option>
                <option value="debit-card">Debit card</option>
                <option value="credit-card">Credit card</option>
            </select>
        </>
    )
}

export default SelectCardType