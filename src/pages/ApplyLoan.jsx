import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MainTitle from '../components/MainTitle'
import MainLayout from '../layouts/MainLayout'
import Spin from '../components/Spin'
import { useSelector } from 'react-redux';

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
        const response = await axios.get('http://localhost:8080/api/loans/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(response.data); // loans
        setLoans(response.data);

        // llamo accounts del client
        const responseCurrentAccounts = await axios.get('http://localhost:8080/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(responseCurrentAccounts.data); // accounts
        setAccounts(responseCurrentAccounts.data);

      } catch (error) {

        setError(error);
        console.error('Error parsing loan info:', error);
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

      const response = await axios.post('http://localhost:8080/api/loans/', loanData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Respuesta del servidor:', response.data); // Puedes manejar la respuesta del servidor aquí

      // Aquí puedes realizar acciones adicionales después de recibir la respuesta, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página
    } catch (error) {
      console.error('Error al enviar la solicitud de préstamo:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
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
    <MainLayout>
      <>
        <MainTitle text='Apply for a Loan' />
        <div className='flex flex-col justify-center items-center'>
          <form action="" className='flex flex-wrap items-center justify-around w-4/5 items-center mt-4 mb-10 p-4 mt-10'>
            <div className='w-[48%] flex flex-col'>
              <label className=''> Select Loan Type
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

              <label className='mt-8'> Select Destination Account
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

              <label className='mt-8'> Amount
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=' 2000' value={amount} onChange={handleAmountChange} />
              </label>

              <label className='mt-8'> Installments
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInstallmentsChange} value={installments}>
                  <option value="" className="py-2 bg-[#E8DFCA] text-[#1A4D2E] font-thin text-lg" disabled>Select number of installments</option>
                  {renderPaymentOptions()}
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

                <button
                  type="submit" // Cambiado a type="submit" para que funcione dentro de un formulario
                  className="inline-block w-1/3 self-center cursor-pointer rounded-md bg-[#4F6F52] px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#E8DFCA] hover:text-[#1A4D2E] hover:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
                  onClick={handleSubmit} // Llama a la función handleSubmit en el evento onClick
                >
                  Submit
                </button>

              </div>
            </div>
          </form>
        </div>
      </>
    </MainLayout>
  )
}

export default ApplyLoan