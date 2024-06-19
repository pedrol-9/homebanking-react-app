import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Spin from '../components/Spin';
import { TEInput } from "tw-elements-react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError(null);

    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const newClient = await axios.post('https://java-module.onrender.com/api/auth/register', payload);

      if (newClient) {
        console.log('Client registered successfully');
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error registering');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <div className='flex justify-center items-center p-8 mt-8'>
      <div className="bg-white p-8 rounded-lg shadow-lg xs:w-4/5 lg:w-2/5">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className='mb-4'>
          <TEInput
            type="text"
            label="First Name"
            size="lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <TEInput
            type="text"
            label="Last Name"
            size="lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <TEInput
            type="email"
            label="Email address"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <TEInput
            type="password"
            label="Password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <TEInput
            type="password"
            label="Confirm Password"
            size="lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleRegister} text="Register" />
        <div className="mt-2 text-center text-gray-500">
          Already have an account? <span onClick={handleLoginRedirect} className="text-blue-500 cursor-pointer">Login</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
