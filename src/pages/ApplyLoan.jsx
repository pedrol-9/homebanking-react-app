import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MainTitle from '../components/MainTitle'
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Spin from '../components/Spin'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ApplyLoan = ({ }) => {

  const [selectedAccount, setSelectedAccount] = useState('');
  const [loans, setLoans] = useState([]);
  const [amount, setAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [selectedLoanName, setSelectedLoanName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loanId, setLoanId] = useState();
  const navigate = useNavigate();

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  const handleLoanChange = (e) => {
    const selectedLoanName = e.target.value;
    const selectedLoan = loans.find((loan) => loan.loanName === selectedLoanName);
    setSelectedLoanName(selectedLoanName);

    if (selectedLoan) {
      //setSelectedLoanName(selectedLoanName);
      setLoanId(selectedLoan.id);
      console.log(selectedLoan.id);
    } else {
      console.log(`couldn't find loan with name '${selectedLoanName}'.`);
    }
  };
  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInstallmentsChange = (e) => {
    setInstallments(e.target.value);
  };

  useEffect(() => {

    console.log("ApplyLoan component mounted")

    const fetchLoanInfo = async () => {

      try {

        setLoading(true);

        // llamo loans available
        const response = await axios.get('https://java-module.onrender.com/api/loans/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(response.data); // loans
        setLoans(response.data);

        // llamo accounts del client
        const responseCurrentAccounts = await axios.get('https://java-module.onrender.com/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(responseCurrentAccounts.data); // accounts
        setAccounts(responseCurrentAccounts.data);

      } catch (error) {

        setError(error);
        console.error('Error parsing loan info:', error.response.data);
        return null;

      } finally {

        setLoading(false);

      }
    };

    if (loans) {
      fetchLoanInfo();
    }

    return (() => {
      console.log("ApplyLoan component unmounted")
    })
  }, [token]);

  useEffect(() => {
    if (selectedLoanName) {
      const selectedLoan = loans.find((loan) => loan.loanName === selectedLoanName);
      if (selectedLoan) {
        setPayments(selectedLoan.payments);
      }
    }
  }, [selectedLoanName, loans]);

  const renderPaymentOptions = () => {
    return payments.map((payment) => (
      <option key={payment} value={payment} className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">
        {payment}
      </option>
    ));
  };

  const handleSubmit = async () => {
    // Validar que todos los campos necesarios estén llenos antes de enviar los datos al backend
    if (!loanId || !amount || !installments || !selectedAccount) {
      console.error('Todos los campos deben estar llenos para enviar la solicitud de préstamo.');
      return;
    }

    const loanData = {
      loanId: loanId,
      amount: parseFloat(amount),
      payments: parseInt(installments),
      destinationAccount: selectedAccount
    };

    console.log('Datos del préstamo a enviar:', loanData);

    try {
      setLoading(true); // Puedes utilizar setLoading para mostrar un spinner o indicador de carga

      const response = await axios.post('https://java-module.onrender.com/api/loans/', loanData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Server response:', response.data); // Puedes manejar la respuesta del servidor aquí
      navigate('/Loans');

      toast.success('Loan application fulfilled!', {
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

      console.error('Error:', error.response?.data);
      toast.error(error.response?.data, {
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
      setLoading(false); // Asegúrate de detener el estado de carga al finalizar la solicitud
    }
  };


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return (
      <Spin />
    );
  }

  return (
    <>
      
      <MainTitle text='Apply for a Loan' />
      <div className='flex flex-col justify-center items-center my-8'>
        <form action="" className='flex flex-wrap items-center justify-around w-4/5 lg:w-3/5 xl:w-2/5 items-center mt-4 mb-10 p-4 mt-10 forms-gradient-bg rounded-md p-4 b'>
          <div className='w-10/12 p-4 flex flex-col b'>
            <label className=''>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleLoanChange}
                value={selectedLoanName}
              >
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select a loan type</option>
                {
                  loans.map((loan) => (
                    <option key={loan.id} value={loan.loanName} className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">{loan.loanName}</option>
                  ))
                }
              </select>

            </label>

            <label className='mt-8'>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleAccountChange}
                value={selectedAccount}
              >
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select a destination account</option>
                {
                  accounts.map((acc) => (
                    <option key={acc.id} value={acc.number} className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">{acc.number}</option>
                  ))
                }
              </select>

            </label>

            <label className='mt-8'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=' Amount' value={amount} onChange={handleAmountChange} />
            </label>

            <label className='mt-8'> 
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInstallmentsChange} value={installments}>
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select number of installments</option>
                {renderPaymentOptions()}
              </select>
            </label>

            <button
                type="submit" // Cambiado a type="submit" para que funcione dentro de un formulario
                className="w-1/3 self-center focus:outline-none text-white text-lg font-bold bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mt-8"
                onClick={handleSubmit} // Llama a la función handleSubmit en el evento onClick
              >
                Submit
              </button>
          </div>
        </form>
      </div>
      
    </>
  )
}

export default ApplyLoan

{/* <>
      
      <MainTitle text='Apply for a Loan' />
      <div className='flex flex-col justify-center items-center'>
        <form action="" className='flex flex-wrap items-center justify-around w-4/5 items-center mt-4 mb-10 p-4 mt-10 forms-gradient-bg rounded-md p-4 border border-[3px] border-[#000000]'>
          <div className='w-[48%] flex flex-col'>
            <label className=''>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleLoanChange}
                value={selectedLoanName}
              >
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select a loan type</option>
                {
                  loans.map((loan) => (
                    <option key={loan.id} value={loan.loanName} className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">{loan.loanName}</option>
                  ))
                }
              </select>

            </label>

            <label className='mt-8'>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleAccountChange}
                value={selectedAccount}
              >
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select a destination account</option>
                {
                  accounts.map((acc) => (
                    <option key={acc.id} value={acc.number} className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-bold text-lg">{acc.number}</option>
                  ))
                }
              </select>

            </label>

            <label className='mt-8'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=' Amount' value={amount} onChange={handleAmountChange} />
            </label>

            <label className='mt-8'> 
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInstallmentsChange} value={installments}>
                <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select number of installments</option>
                {renderPaymentOptions()}
              </select>
            </label>

            <button
                type="submit" // Cambiado a type="submit" para que funcione dentro de un formulario
                className="focus:outline-none text-white text-lg font-bold bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 my-4"
                onClick={handleSubmit} // Llama a la función handleSubmit en el evento onClick
              >
                Submit
              </button>
          </div>
        </form>
      </div>
      
    </> */}