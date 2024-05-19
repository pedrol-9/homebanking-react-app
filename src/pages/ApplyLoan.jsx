import React from 'react'
import MainTitle from '../components/MainTitle'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

const ApplyLoan = () => {
  return (
    <>
      <MainLayout>
        <MainTitle text='Apply for a Loan' />
        <div className='flex flex-col justify-center items-center'>
          <form action="" className='flex flex-wrap items-center justify-around w-2/3 items-center mt-4 mb-10 p-4 mt-10'>
            <div className='w-[45%] flex flex-col'>
              <label className=''> Select Loan Type
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled selected>e.g.: Mortgage</option>
                  <option value="debit-card">Mortgage</option>
                  <option value="credit-card">Automotive</option>
                  <option value="credit-card">Personal</option>
                </select>
              </label>

              <label className='mt-8'> Select Account
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled selected>e.g.: VIN-0001</option>
                  <option value="debit-card">VIN-0001</option>
                  <option value="credit-card">VIN-0002</option>
                  <option value="credit-card">VIN-0003</option>
                </select>
              </label>

              <label className='mt-8'> Amount
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='e.g.: $2000.00' />
              </label>

              <label className='mt-8'> Installments
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled selected>e.g.: 60</option>
                  <option value="debit-card">60</option>
                  <option value="credit-card">42</option>
                  <option value="credit-card">30</option>
                  <option value="credit-card">24</option>
                </select>
              </label>
            </div>

            <div className="w-[40%] rounded-2xl bg-[#1A4D2E] m-8">
              <div className="flex flex-col gap-2 p-8">
                <input className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email" />
                <label className="flex cursor-pointer items-center justify-between p-1 text-[#E8DFCA] text-slate-400">
                  Accept terms of use
                  <div className="relative inline-block">
                    <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                  </div>
                </label>
                <label className="flex cursor-pointer items-center justify-between p-1 text-[#E8DFCA] text-slate-400">
                  Subscribe to newsletter
                  <div className="relative inline-block">
                    <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                  </div>
                </label>

                <button className="inline-block cursor-pointer rounded-md bg-[#4F6F52] px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#E8DFCA] hover:text-[#1A4D2E] hover:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Submit</button>

              </div>
            </div>
          </form>
        </div>
      </MainLayout>

    </>

  )
}

export default ApplyLoan