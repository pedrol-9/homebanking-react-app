import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import MainTitle from '../components/MainTitle';
import AvailableLoansInfo from '../components/AvailableLoansInfo';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Spin from '../components/Spin';
import { useSelector } from 'react-redux';
import LoansInfo from '../components/LoansInfo';

const Loans = () => {
  const [availableLoans, setAvailableLoans] = useState([]);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    console.log("Loans Component Mounted");

    const fetchAvailableLoans = async () => {
      try {
        setLoading(true);

        const response = await axios.get('http://localhost:8080/api/loans/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        setAvailableLoans(response.data);
      } catch (err) {
        console.error('Error fetching available loans: ', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchAvailableLoans();
    }

    return () => {
      console.log("Loans unmounted");
    };
  }, [token]);

  useEffect(() => {
    const fetchClientLoans = async () => {
      try {
        setLoading(true);

        const clientResponse = await axios.get('http://localhost:8080/api/auth/current', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(clientResponse.data);
        if (clientResponse.data && clientResponse.data.loans) {
          setLoans(clientResponse.data.loans);
        } else {
          console.log("Client's loans not found");
        }
      } catch (err) {
        console.error('Error fetching client loans: ', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchClientLoans();
    }
  }, [token]);

  if (loading) {
    return <Spin />;
  }

  return (
    <MainLayout>
      <>
        <div className='my-8'>
          <MainTitle text='Your Loans' />
          <div className='flex flex-wrap justify-center mt-8'>
            {loans.map((loan, id) => (
              <LoansInfo key={id} loanType={loan.name} amount={loan.amount} payments={loan.payments} />
            ))}
          </div>
        </div>

        <hr className='border-0 border-t-2 border-solid border-[#1A4D2E] w-1/2 mx-auto my-8' />

        <div className='flex flex-col items-center'>
          <MainTitle text='Available loans to request' css='bg-[#1A4D2E] inline-block xs:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] text-white py-2 xs:mx-16 rounded-md py-4 px-16' />

          <div className='flex flex-wrap w-[90%] justify-center my-8 mx-16 bg-gradient-to-br from-[#E0B884] via-[#C7A273] to-[#E0B884] rounded-lg p-4 shadow-md 
          hover:shadow-[0px_2px_8px_4px_#695608] border border-[5px] border-[#C0C2C9]'>
            {availableLoans.map((loan, id) => (
              <AvailableLoansInfo
                key={id}
                loanType={loan.loanName}
                amount={loan.maxAmount}
                payments={loan.payments.map((payment, index, array) => {
                  if (index === array.length - 1) {
                    return payment.toString();
                  } else {
                    return payment.toString() + ' - ';
                  }
                })}
              />
            ))}
          </div>

          <Button text='Request new Loan' to='/ApplyLoans' css={'mb-8'} />
        </div>
      </>
    </MainLayout>
  );
};

export default Loans;


/* En JavaScript, los índices de los arreglos comienzan desde 0. Por lo tanto, el índice del último elemento en un arreglo de longitud n es n - 1. Esto se debe a que los índices van desde 0 hasta n - 1, donde n es el número total de elementos en el arreglo.

Entonces, cuando comparamos index === array.length - 1, estamos verificando si el índice actual (index) es igual al índice del último elemento en el arreglo (array.length - 1). Si esta comparación es verdadera, significa que estamos en el último elemento del arreglo. */