import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccCards from '../components/AccCards';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import MainLayout from '../layouts/MainLayout';
import Carrusel from '../components/Carrusel';
import { useSelector } from 'react-redux';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setAccounts(response.data || []);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setError('Access denied. You do not have permission to access this resource.');
      } else {
        setError('Error fetching data: ' + err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Accounts Mounted");
    if (token) {
      fetchAccounts();
    }
    return () => {
      console.log("Accounts unmounted");
    }
  }, [token]);

  const createAccount = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/clients/current/accounts', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Account created:', response.data);
      fetchAccounts(); // Actualizar las cuentas después de crear una nueva
    } catch (error) {
      console.error('Error creating account:', error.response.data);
      setError(error.response.data);
    }
  };

  const handleSelectedAccount = (id) => {
    setSelectedAccountId(id);
  };

  const formatDateTime = (dateTimeStr) => {
    const dateObj = new Date(dateTimeStr);
    const year = dateObj.getFullYear();
    const month = `0${dateObj.getMonth() + 1}`.slice(-2); // Agrega cero inicial y obtiene últimos 2 caracteres
    const day = `0${dateObj.getDate()}`.slice(-2); // Agrega cero inicial y obtiene últimos 2 caracteres
    const hours = `0${dateObj.getHours()}`.slice(-2); // Agrega cero inicial y obtiene últimos 2 caracteres
    const minutes = `0${dateObj.getMinutes()}`.slice(-2); // Agrega cero inicial y obtiene últimos 2 caracteres
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

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
        <div className='flex flex-wrap justify-center my-8'>
          {accounts.length > 0 ? (
            accounts.map((acc, id) => (
              <React.Fragment key={id}>
                <AccCards
                  accNumber={acc.number}
                  amount={acc.balance}
                  creationDate={acc.creationDate}
                  onClick={() => handleSelectedAccount(acc.id)} // Pasar el id al hacer clic
                />
                {selectedAccountId === acc.id && (
                  <div className="account-details w-3/5">
                    {/* Aquí puedes renderizar tu tabla o contenido adicional border border-[2px] border-black*/}
                    <div className='flex flex-col justify-center'>
                      <h4 className='font-bold text-center text-lg mb-3'><span className='bg-color2 text-white p-2 rounded-md'>{acc.number} -</span> Account Transactions:</h4>
                      <table className="table border border-black border-dotted rounded-md p-2">
                        <thead className='mt-2 mx-2'>
                          <tr>
                            <th className="bg-color2 text-white p-2 font-bold">Type</th>
                            <th className="bg-color2 text-white p-2 font-bold">Amount</th>
                            <th className="bg-color2 text-white p-2 font-bold">Date</th>
                            <th className="bg-color2 text-white p-2 font-bold">Description</th>
                          </tr>
                        </thead>
                        <tbody className='mb-2 mx-2'>
                          {acc.transactions.map((trx, index) => (
                            <tr key={trx.id} className={index % 2 === 0 ? 'bg-color3' : 'bg-color4'}>
                              <td className="p-2 italic text-center">{trx.type}</td>
                              <td className="p-2 italic text-center">{trx.amount.toFixed(2)}</td>
                              <td className="p-2 italic text-center">{formatDateTime(trx.date)}</td>
                              <td className="p-2 italic text-center">{trx.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Otros detalles de cuenta */}
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            <p>No accounts available</p>
          )}
        </div>
        <Button text="New Account" onClick={createAccount} />
      </div>

    </MainLayout>
  );
};

export default Accounts;


/* ULTIMA VERSION DE ACCOUNTS QUE CREA ACCOUNTS DESDE EL UI
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccCards from '../components/AccCards';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import MainLayout from '../layouts/MainLayout';
import Carrusel from '../components/Carrusel';
import { useSelector } from 'react-redux';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [accountId, setAccountId] = useState(null);

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setAccounts(response.data || []);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setError('Access denied. You do not have permission to access this resource.');
      } else {
        setError('Error fetching data: ' + err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Accounts Mounted");
    if (token) {
      fetchAccounts();
    }
    return () => {
      console.log("Accounts unmounted");
    }
  }, [token]);

  const createAccount = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/clients/current/accounts', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Account created:', response.data);
      fetchAccounts(); // Actualizar las cuentas después de crear una nueva
    } catch (error) {
      console.error('Error creating account:', error.response.data);
      setError(error.response.data);
    }
  };

  const handleSelectedAccount = (e) => {
    e.preventDefault();

    setAccountId(e.target.value);
  }

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
        <Button text="New Account" onClick={createAccount} />
      </div>
    </MainLayout>
  );
};

export default Accounts; */

