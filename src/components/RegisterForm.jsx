import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Spin from '../components/Spin';
import { TEInput } from "tw-elements-react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    // Lógica de registro aquí
    setLoading(false);
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      {/* Ajusta el ancho del contenedor aquí */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/5">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className=' mb-4'>
          <TEInput
            type="text"
            label="Full Name"
            size="lg"
            className=""
          />
        </div>
        <div className=' mb-4'>
          <TEInput
            type="email"
            label="Email address"
            size="lg"
            className=""
          />
        </div>
        <div className=' mb-4'>
          <TEInput
            type="password"
            label="Password"
            className=""
            size="lg"
          />
        </div>
        <div className=' mb-4'>
          <TEInput
            type="password"
            label="Confirm Password"
            className=""
            size="lg"
          />
        </div>
        <Button onClick={handleRegister} text="Register" />
        {/* <p className="mt-2 text-center text-gray-500">
          Already have an account? <a href="#!" className="text-blue-500">Login</a>
        </p> */}
      </div>
    </div>
  );
};

export default RegisterForm;
