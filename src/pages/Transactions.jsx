import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'

const Transactions = () => {

  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  /* useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:8080/api/clients/1');
        console.log(response.data);
        console.log(response.data.accounts);
        setClient(response.data);
        setTransactions(response.data.accounts);
      } catch (err) {
        console.error('Error fetching data: ', err); // Capturar y mostrar el error en la consola
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts(); // Llamar a la función fetchAccounts cuando el componente se monte
  }, []); */

  if (loading) {
    return (
      <Spin/>
    );
  }

  return (
    <>
      <MainLayout>        
        <div>Transactions</div>      
      </MainLayout>

    </>
  )
}

export default Transactions