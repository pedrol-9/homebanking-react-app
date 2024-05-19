import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AccCards from '../components/AccCards'
import Banner from '../components/Banner'
import Button from '../components/Button'
import MainTitle from '../components/MainTitle'
import MainLayout from '../layouts/MainLayout'
import Carrusel from '../components/Carrusel'


const Accounts = () => {

  const [accounts, setAccounts] = useState([]);
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Variable de estado para almacenar los errores
  // const [] = useState();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:8080/api/clients/1');
        console.log(response.data);
        console.log(response.data.accounts);
        setClient(response.data);
        setAccounts(response.data.accounts);
      } catch (err) {
        console.error('Error fetching data: ', err); // Capturar y mostrar el error en la consola
        setError(err.message);
      } finally {
        setLoading(false);
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
        <div className='flex flex-col'>
          <MainTitle text={"Welcome, " + client.firstName} />
          {/* <Banner img='\assets\imgs\banner_homebanking.png'/> */}
          <Carrusel />
          <div className='flex flex-wrap'>
            {
              accounts.map((acc, id) => {
                return <AccCards key={id} accNumber={acc.number} amount={acc.balance} creationDate={acc.creationDate} />
              })
            }
          </div>
          <Button text="New Account" to='' />
        </div>
      </MainLayout>
    </>

  )
}

export default Accounts