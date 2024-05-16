import React from 'react'

const TableTransations = () => {
  return (
    <table className='w-[47vw] bg-[#4F6F52] ml-4 p-2'>
          <thead>
            <tr className='p-1 text-center'>
              <th className='p-1 border-[#E8DFCA] border'>Type</th>
              <th className='p-1 border-[#E8DFCA] border'>Amount</th>
              <th className='p-1 border-[#E8DFCA] border'>Data</th>
              <th className='p-1 border-[#E8DFCA] border'>Description</th>
            </tr>
            <tr className='p-1 text-center'>
              <td className='p-1 border-[#E8DFCA] border'>CREDIT</td>
              <td className='p-1 border-[#E8DFCA] border'>$25.000,00</td>
              <td className='p-1 border-[#E8DFCA] border'>24/04/23</td>
              <td className='p-1 border-[#E8DFCA] border'>Test Credit</td>
            </tr>
            <tr className='p-1 text-center'>
              <td className='p-1 border-[#E8DFCA] border'>DEBIT</td>
              <td className='p-1 border-[#E8DFCA] border'>$5.000,00</td>
              <td className='p-1 border-[#E8DFCA] border'>24/04/23</td>
              <td className='p-1 border-[#E8DFCA] border'>Test Debit</td>
            </tr>
            <tr className='p-1 text-center'>
              <td className='p-1 border-[#E8DFCA] border'>CREDIT</td>
              <td className='p-1 border-[#E8DFCA] border'>$200,00</td>
              <td className='p-1 border-[#E8DFCA] border'>24/04/23</td>
              <td className='p-1 border-[#E8DFCA] border'>Test Credit</td>
            </tr>
          </thead>
        </table>
  )
}

export default TableTransations