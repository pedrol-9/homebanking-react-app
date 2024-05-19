import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import MainTitle from '../components/MainTitle'
import LoansInfo from '../components/LoansInfo'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import Banner from '../components/Banner'

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchAccounts = async () => {
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
      }
    };

    fetchAccounts(); // Llamar a la función fetchAccounts cuando el componente se monte
  }, []);

  if (loading) {
    return (
    <div className='w-full text-center'>
      <h1>Loading</h1>
    </div>
    )
  }

  return (
    <>
      <MainLayout>
        <div>
          {/* <div className='w-full'>
            <Banner img="\assets\imgs\cheerfulWomanOrange.jpg" />
          </div> */}
          <MainTitle text='Your Loans' />
          <div className='flex flex-wrap'>
            { 
              loans.map((loan, id) => {
                return <LoansInfo key={id} loanType={loan.name} amount={loan.amount} creationDate={loan.creationDate} />
              })              
            }
          </div>
          <Button text='Request new Loan' to='/ApplyLoans' />
        </div>
      </MainLayout>
    </>
  )
}

export default Loans