import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainTitle from '../components/MainTitle';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Spin from '../components/Spin';

const TransactionForm = () => {
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.authReducer.token);
  const [sourceAccounts, setSourceAccounts] = useState([]);
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSourceAccount, setSelectedSourceAccount] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://java-module.onrender.com/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSourceAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      } finally {
        setLoading(false);
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
    const defaultDescription = `Transaction made on: ${transactionDate} ** Amount: $${parsedAmount} ** Destination Account: ${destinationAccount}`;
    const finalDescription = description.trim() === '' ? defaultDescription : description;

    try {
      const transactionData = {
        sourceAccountNumber: selectedSourceAccount,
        destinationAccountNumber: destinationAccount,
        amount: parsedAmount,
        description: finalDescription
      };
      console.log('Form data:', transactionData);
      const response = await axios.post('https://java-module.onrender.com/api/clients/current/transactions', transactionData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Transaction successful: ', response.data)
      navigate('/Accounts');
      toast.success('Transaction successful!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.error('Error making transaction: ', error.response.data)
      toast.error(error.response.data, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spin />
  }
  
  return (
    <>
      {/* <MainLayout> */}
      <MainTitle text="Make a Transaction" />
      <div className='flex justify-center items-center'>
        <div className='flex justify-center w-full xs:w-3/4 lg:w-3/5 items-center my-10'>
          <form onSubmit={handleSubmit} className="forms-gradient-bg w-full md:w-3/4 lg:w-1/2 flex flex-col m-4  rounded-md p-4 border border-[3px] border-black">
            <label className="flex flex-col items-start justify-between p-1 text-[#E8DFCA] font-semibold text-slate-400 my-2">
              <select
                name="sourceAccount"
                value={selectedSourceAccount}
                onChange={handleChange}
                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
                required
              >
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select origin account</option>
                {sourceAccounts.map((account) => (
                  <option key={account.number} className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg" value={account.number}>
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
            <label className="flex flex-col items-start justify-between p-1 text-white font-semibold text-slate-400 mb-4">
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description (optional)"
              />
            </label>
            <div className='w-full flex justify-center gap-2'>
              <Button type="submit" text='Submit' onClick={handleSubmit} />
              <Button text='Cancel' css={'bg-red-900 hover:bg-red-600'} />
            </div>
          </form>
        </div>
      </div>
      {/* </MainLayout> */}
    </>
  );
};

export default TransactionForm;
