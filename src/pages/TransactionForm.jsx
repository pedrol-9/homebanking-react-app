import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import MainTitle from '../components/MainTitle';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransactionForm = () => {
  const token = useSelector((state) => state.authReducer.token);
  const [sourceAccounts, setSourceAccounts] = useState([]);
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSourceAccount, setSelectedSourceAccount] = useState('');
  const [destinationType, setDestinationType] = useState('own'); // 'own' or 'thirdParty'

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSourceAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, [token]); // Se ejecuta solo una vez al montar el componente

  const handleChange = (e) => {
    if (e.target.name === 'destinationType') {
      setDestinationType(e.target.value);
    } else {
      setSelectedSourceAccount(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del monto para asegurarse de que sea un número válido
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      console.error('Invalid amount entered:', amount);
      return; // detiene la función handleSubmit
    }

    const transactionDate = new Date().toLocaleDateString('en-US');
    const defaultDescription = `Transaction made on: ${transactionDate} - Amount: ${parsedAmount} + Destination Account: ${destinationAccount}`;
    const finalDescription = description.trim() === '' ? defaultDescription : description;

    try {
      const transactionData = {
        sourceAccountNumber: selectedSourceAccount,
        destinationAccountNumber: destinationAccount,
        amount: parsedAmount,
        description: finalDescription
      };

      console.log('Form data:', transactionData);

      const response = await axios.post('http://localhost:8080/api/clients/current/transactions', transactionData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Transaction successful!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      console.log('Transaction successful: ', response.data)
    } catch (error) {
      console.error('Error making transaction: ', error.response.data)
      toast.error('Transaction failed. Please try again.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    }
  };

  return (
    <MainLayout>
      <>
        <MainTitle text="Create a Transaction" />
        <div className='flex justify-center items-center'>
          <div className='flex justify-center w-full xs:w-3/4 lg:w-3/5 items-center mt-16 mb-10'>
            <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 flex flex-col m-4 bg-[#4F6F52] rounded-md p-4 border border-[3px] border-[#000000]">
              <div className='flex justify-start items-center mb-4'>
                <input
                  type="radio"
                  id="ownAccount"
                  name="destinationType"
                  value="own"
                  checked={destinationType === 'own'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="ownAccount" className="text-gray-900 text-sm font-semibold">
                  Own Account
                </label>
              </div>
              <div className='flex justify-start items-center'>
                <input
                  type="radio"
                  id="thirdPartyAccount"
                  name="destinationType"
                  value="thirdParty"
                  checked={destinationType === 'thirdParty'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="thirdPartyAccount" className="text-gray-900 text-sm font-semibold">
                  Third Party Account
                </label>
              </div>
              <label className="flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 my-2">
                <select
                  name="sourceAccount"
                  value={selectedSourceAccount}
                  onChange={handleChange}
                  className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
                  required
                >
                  <option value="" disabled>Select origin account</option>
                  {sourceAccounts.map((account) => (
                    <option key={account.number} value={account.number}>
                      {account.number}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 mb-4">
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                  value={destinationAccount}
                  onChange={(e) => setDestinationAccount(e.target.value)}
                  placeholder="Enter destination account"
                  required
                />
              </label>
              <label className="flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 mb-4">
                <input
                  type="number" // Cambiado a type="number" para asegurar que el input sea numérico
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                />
              </label>
              <label className="flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 mb-4">
                Description (optional)
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter transaction description"
                />
              </label>
              <div className='w-full flex justify-center gap-2'>
                <Button type="submit" text='Submit' onClick={handleSubmit} />
                <Button text='Cancel' />
              </div>
            </form>

            <ToastContainer />
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default TransactionForm;
