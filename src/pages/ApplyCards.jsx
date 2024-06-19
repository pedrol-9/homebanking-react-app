import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MainTitle from '../components/MainTitle';
import SelectCardType from '../components/SelectCardType';
import SelectCardMembership from '../components/SelectCardMembership';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const ApplyCards = () => {
  const token = useSelector((state) => state.authReducer.token);
  const [cardType, setCardType] = useState(''); // Valor predeterminado para la opción deshabilitada
  const [cardMembership, setCardMembership] = useState(''); // Valor predeterminado para la opción deshabilitada
  const navigate = useNavigate();

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
      const response = await axios.post('https://java-module.onrender.com/api/clients/current/cards', infoForNewCard, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Server response:', response.data);
      navigate('/Cards')

      toast.success('Card application fulfilled!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

    } catch (error) {
      
      console.error('Error:', error.response?.data);
      toast.error(error.response?.data, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });    
    }
  };

  return (
    <>
      <MainTitle text="Apply for a Card" />
      <div className='flex justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-center w-full lg:w-3/5 items-center mt-8 lg:mt-16 mb-10'>
          <form className="w-11/12 md:w-3/5 lg:w-1/2 flex flex-col m-4 forms-gradient-bg rounded-md p-4 border border-[3px] border-[#000000]">
            <SelectCardType className="my-2" value={cardType} onChange={(e) => setCardType(e.target.value)} />
            <SelectCardMembership className="my-2" value={cardMembership} onChange={(e) => setCardMembership(e.target.value)} />
            <div className='w-full flex justify-center gap-2 mt-4'>
              <Button text='Apply' onClick={handleApply} />
              <Button text='Cancel' />
            </div>
          </form>
          <figure className='flex justify-center mt-8 lg:mt-0 lg:ml-8'>
            <img className='w-4/5 md:w-3/5 lg:w-3/5' src="/assets/imgs/applyCards.png" alt="image of credit cards" />
          </figure>
        </div>
      </div>
    </>

  );
};

export default ApplyCards;

{/* <>
    
      <MainTitle text="Apply for a Card" />
      <div className='flex justify-center items-center '>
        <div className='flex justify-center w-3/5 items-center mt-16 mb-10 '>
          <form className="w-1/2 flex flex-col m-4 forms-gradient-bg rounded-md p-4 border border-[3px] border-[#000000] ">
            <SelectCardType style="my-2" value={cardType} onChange={(e) => setCardType(e.target.value)} />
            <SelectCardMembership style="" value={cardMembership} onChange={(e) => setCardMembership(e.target.value)} />
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
  
    </> */}


