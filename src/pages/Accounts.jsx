import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccCards from '../components/AccCards';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import MainLayout from '../layouts/MainLayout';
import Carrusel from '../components/Carrusel';
import { useSelector } from 'react-redux';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]); // Asegurarse de que el estado inicial es un arreglo vacío
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.authReducer.user); // Accede al usuario del store
  const token = useSelector((state) => state.authReducer.token); // Accede al token del store
  // const { userId, accounts } = user;
  // const accounts = useSelector((state) => state.authReducer.user.accounts);

  // console.log(token)

  useEffect(() => {

    console.log("Accounts Mounted")
    const fetchAccounts = async () => {

      try {

        setLoading(true);

        // Hacer la petición a la API con el token
        const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data)

        setAccounts(response.data || []); // Asegurarse de que `accounts` siempre es un arreglo

      } catch (err) {

        if (err.response && err.response.status === 403) {
          setError('Access denied. You do not have permission to access this resource.');
        } else {
          setError('Error fetching data: ' + err.message);
        }

      } finally {

        setLoading(false);

      }
    };

    if (token) {
      fetchAccounts(); // Llamar a la función fetchAccounts cuando el componente se monte si hay un token
    }

    return () => {
      console.log("Accounts unmounted")
    }
  }, [token]);

  if (loading) {
    return (
      <div className='w-full text-center'>
        <MainTitle>Loading</MainTitle>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full text-center'>
        <MainTitle>Error: {error.message}</MainTitle>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className='flex flex-col'>
        <MainTitle text={`Welcome, ${user.name || 'User'}!`} />
        <Carrusel />
        <div className='flex flex-wrap justify-center'>
          {accounts.length > 0 ? (
            accounts.map((acc, id) => (
              <AccCards key={id} accNumber={acc.number} amount={acc.balance} creationDate={acc.creationDate} />
            ))
          ) : (
            <p>No accounts available</p>
          )}
        </div>
        <Button text="New Account" to='/NewAccount' />
      </div>
    </MainLayout>
  );
};

export default Accounts;

