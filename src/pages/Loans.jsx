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

        <hr className='border-dotted border-[2px] w-1/2 bg-[#1A4D2E] self-center my-8' />

        <div>
          <MainTitle text='Available loans to request' />

          <div className='flex flex-wrap justify-center my-8'>
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