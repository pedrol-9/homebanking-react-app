import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import MainTitle from '../components/MainTitle'
import LoansInfo from '../components/LoansInfo'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import Spin from '../components/Spin'

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Loans Component Mounted")

    const fetchLoans = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:8080/api/clients/1');
        console.log(response.data);
        console.log(response.data.loans);
        setClient(response.data);
        setLoans(response.data.loans);
      } catch (err) {
        console.error('Error fetching data: ', err); // Capturar y mostrar el error en la consola
      } finally {
        setLoading(false)
        console.log(loans)
      }
    };

    fetchLoans(); // Llamar a la función fetchAccounts cuando el componente se monte

    return () => {
      console.log("Loans unmounted")
    }

  }, []);

  if (loading) {
    return (
      <Spin />
    );
  }

  return (
    <>
      <MainLayout>
        <div>
          
          <MainTitle text='Your Loans' />

          <div className='flex flex-wrap justify-center my-28'>
            {
              loans.map((loan, id) => (
                <LoansInfo key={id} loanType={loan.name} amount={loan.amount} payments={loan.payments} />
              ))
            }
          </div>
          <Button text='Request new Loan' to='/ApplyLoans' />
        </div>
      </MainLayout>
    </>
  )
}

export default Loans