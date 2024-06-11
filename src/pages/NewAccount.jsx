import axios from 'axios';
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MainTitle from '../components/MainTitle';
import Spin from '../components/Spin'

const NewAccount = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);s

  /* const handleCreateAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8080/api/clients/current/create-account',
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setMessage('New account created successfully!');
    } catch (error) {
      console.error('Error creating account:', error);
      setMessage('Failed to create new account');
    }
  }; */

  if (loading) {
    return (
      <Spin/>
    );
  }s

  return (
    <MainLayout>
      <MainTitle text="Request a new account" />
      <Button text="Request Account"/>
      {message && <div>{message}</div>}
    </MainLayout>
  );
};

export default NewAccount;
