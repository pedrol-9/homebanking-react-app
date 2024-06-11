import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MainTitle from '../components/MainTitle'
import MainLayout from '../layouts/MainLayout'
import Spin from '../components/Spin'

const ApplyLoan = ({ }) => {
  const [loans, setLoans] = useState([]);
  const [loanInfo, setLoanInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);

  /* useEffect(() => {
    console.log("ApplyLoan component mounted")
    const fetchLoanInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/loans/');
        console.log(response.data); // loans
        setLoans(response.data);
        console.log(response.data[0]); // loanInfo
        setLoanInfo(response.data[0]);
        console.log(response.data[0].payments) // payments
        setPayments(response.data[0].payments)
      } catch (error) {
        setError(error);
        console.error('Error parsing loan info:', error);
        return null;
      } finally {
        setLoading(false);
        console.log(loans)
        console.log(loanInfo)
        console.log(payments)
      }
    };    

    fetchLoanInfo();

    return (() => {
      console.log("ApplyLoan component unmounted")
    })

  }, []); */

  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return (
      <Spin/>
    );
  }

  return (
    <>
      <MainLayout>
        <MainTitle text='Apply for a Loan' />
        <div className='flex flex-col justify-center items-center'>
          <form action="" className='flex flex-wrap items-center justify-around w-4/5 items-center mt-4 mb-10 p-4 mt-10'>
            <div className='w-[48%] flex flex-col'>
              <label className=''> Select Loan Type
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled >e.g.: Mortgage</option>
                  {/* {
                    loanInfo.map((loan) => (
                      <option className='tex-black' key={loan.id} value={loan.loanType}>{loan.loanType}</option>
                    ))
                    
                  } */}
                </select>
              </label>

              <label className='mt-8'> Select Account
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled >e.g.: VIN-00001201</option>
                  {/* {
                    loanInfo.map( (loan) => (
                      <option key={loan.id} value={loan.accountNumber}>{loan.accountNumber}</option>
                    ))
                  } */}
                </select>
              </label>

              <label className='mt-8'> Amount
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='e.g.: $2000.00' />
              </label>

              <label className='mt-8'> Installments
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled >e.g.: 60</option>
                  {/* {
                    payments.map((payment) => (
                      <option key={payment} value={payment}>{payment}</option>
                    ))
                  } */}
                </select>
              </label>
            </div>

            <div className="w-[42%] rounded-2xl bg-[#1A4D2E] m-4">
              <div className="flex flex-col gap-2 p-3">

                <label className="flex cursor-pointer items-center justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400">
                  Accept terms of use
                  <div className="relative inline-block">
                    <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                  </div>
                </label>
                <label className="flex cursor-pointer items-center justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400">
                  Subscribe to newsletter
                  <div className="relative inline-block">
                    <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                  </div>
                </label>

                <button className="inline-block w-1/3 self-center cursor-pointer rounded-md bg-[#4F6F52] px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#E8DFCA] hover:text-[#1A4D2E] hover:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Submit</button>

              </div>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  )
}

export default ApplyLoan