// AccountTransactions.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import AccCards from '../components/AccCards';
import MainTitle from '../components/MainTitle';

const AccountTransactions = () => {
  const [account, setAccount] = useState(null);
  const token = useSelector((state) => state.authReducer.token);
  const params = useParams();
  const id = params.id;

  useEffect(() => {

    console.log(id)
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/clients/accounts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAccount(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching account details:', error);
        if (error.response && error.response.status === 403) {
          // Handle access denied error
          setAccount(null);
          console.log('Access denied. You do not have permission to view this account.');
        } else {
          // Handle other errors
          console.log('Error fetching account details. Please try again later.');
        }
      }
    };

    fetchAccountDetails();
  }, [id]);


  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <>
    {/* <MainLayout> */}
    <MainTitle text="Transactions Details" />
      <div className="flex flex-col justify-center items-center">
        <AccCards accNumber={account.number} amount={account.balance} creationDate={account.creationDate}/>
        <div className="account-details w-11/12 lg:w-9/12 lg:p-8">
          <div className='flex flex-col justify-center p-2'>
            <h4 className='font-bold text-center text-lg mb-3'>
              Account Transactions:
            </h4>
            <table className="table border border-black border-dotted rounded-md p-2 xs:w-full">
              <thead className='mt-2 mx-2'>
                <tr>
                  <th className="bg-color2 text-white p-2 font-bold">Type</th>
                  <th className="bg-color2 text-white p-2 font-bold">Amount</th>
                  <th className="bg-color2 text-white p-2 font-bold">Date</th>
                  <th className="bg-color2 text-white p-/*  */2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody className='mb-2 mx-2'>
                {account.transactions.map((trx, index) => (
                  <tr key={trx.id} className={index % 2 === 0 ? 'bg-color3' : 'bg-color4'}>
                    <td className="p-2 italic text-center">{trx.type}</td>
                    <td className="p-2 italic text-center">{trx.amount.toFixed(2)}</td>
                    <td className="p-2 italic text-center">{new Date(trx.date).toLocaleString()}</td>
                    <td className="p-2 italic text-center">{trx.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {/* </MainLayout> */}
    </>
  );
};

export default AccountTransactions;
