import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccCards from '../components/AccCards';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import MainLayout from '../layouts/MainLayout';
import Carrusel from '../components/Carrusel';
import { useSelector } from 'react-redux';

const Accounts = () => {
  // const [accounts, setAccounts] = useState([]); // Asegurarse de que el estado inicial es un arreglo vacío
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.authReducer.user); // Accede al usuario del store
  const token = useSelector((state) => state.authReducer.token); // Accede al token del store
  const userId = useSelector((state) => state.authReducer.user.id);
  const accounts = useSelector((state) => state.authReducer.user.accounts);

 /*  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);
        // Hacer la petición a la API con el token
        const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAccounts(response.data.accounts || []); // Asegurarse de que `accounts` siempre es un arreglo
        console.log(user)
        console.log(userId)
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchAccounts(); // Llamar a la función fetchAccounts cuando el componente se monte si hay un token
    }
  }, [token]); */

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



/* useEffect(() => {

    const fetchAccounts = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        setClient(response.data);

        console.log(response.data.id);
        const clientId = response.data.id;

        const accountsResponse = await axios.get(`http://localhost:8080/api/clients/${clientId}/accounts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(accountsResponse);
        setAccounts(accountsResponse);

      } catch (err) {
        console.error('Error fetching data: ', err);
        setError(err)
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []); */

  /* useEffect(() => {
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
  }, []); */


/* import jwt_decode from 'jwt-decode';

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("No token found");
        }

        const decodedToken = jwt_decode(token);
        const clientId = decodedToken.userId;

        const response = await axios.get(`http://localhost:8080/api/clients/${clientId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClient(response.data);
        setAccounts(response.data.accounts);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, []); */
