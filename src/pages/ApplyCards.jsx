import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import MainTitle from '../components/MainTitle';
import SelectCardType from '../components/SelectCardType';
import SelectCardMembership from '../components/SelectCardMembership';
import Button from '../components/Button';

const ApplyCards = () => {
  const token = useSelector((state) => state.authReducer.token);
  const [cardType, setCardType] = useState('');
  const [cardMembership, setCardMembership] = useState('');

  useEffect(() => {
    console.log("ApplyCards Mounted");
    console.log("Token:", token); // Verificar el token en la consola
  }, [token]);

  useEffect(() => {
    return () => {
      console.log("ApplyCards Unmounted");
    }
  }, []);

  let infoForNewCard = {
    cardType: cardType,
    cardColor: cardMembership
  };

  const handleApply = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/clients/current/cards', infoForNewCard,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      console.log('Response:', response.data);
      // Aquí podrías manejar la respuesta del backend según tus necesidades
    } catch (error) {
      console.error('Error:', error);
      console.error('Error:', error.response?.data);
      // Manejo de errores
    }
  };

  return (
    <MainLayout>
      <MainTitle text="Apply for a Card" />
      <div className='flex justify-center items-center'>
        <div className='flex justify-center w-3/5 items-center mt-16 mb-10'>
          <form className="w-1/2 flex flex-col m-4 bg-[#4F6F52] rounded-md p-4 border border-[3px] border-[#000000]">
            <SelectCardType style="my-2" onChange={(e) => setCardType(e.target.value)} />
            <SelectCardMembership style="" onChange={(e) => setCardMembership(e.target.value)} />
            <div className='w-full flex justify-center gap-2'>
              <Button text='Apply' onClick={handleApply} />
              <Button text='Cancel' />
            </div>
          </form>
          <figure className='flex justify-center'>
            <img className='w-3/5' src="/assets/imgs/applyCards.png" alt="image of credit cards" />
          </figure>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplyCards;
