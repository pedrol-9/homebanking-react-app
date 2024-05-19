import React from 'react'

const SelectCardMembership = () => {
    return (
        <>
            <label for="card-membership" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select card membership</label>
            <select id="card-membership" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>e.g.: Gold</option>
                <option value="debit-card">Gold</option>
                <option value="credit-card">Platinum</option>
                <option value="credit-card">Silver</option>
            </select>
        </>
    )
}

export default SelectCardMembership