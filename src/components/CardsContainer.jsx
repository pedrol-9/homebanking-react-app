import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardContent from './CardContent'
import MainTitle from './MainTitle';
import { useSelector  } from 'react-redux';

const CardsContainer = () => {

  const [cards, setCards] = useState([]);
  // const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    
    console.log("CardsContainer Mounted")

    const fetchCards = async () => {

      try {

        setLoading(true)
        const response = await axios.get('http://localhost:8080/api/clients/current/cards', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data)
        
        setCards(response.data);

      } catch (err) {

        console.error('Error fetching data: ', err);

      } finally {

        setLoading(false)
        
      }
    }

    if (cards) {
      fetchCards();
    }

    return () => {
      console.log("CardsContainer Unmounted")
    }
  }, [token]);

  if (!cards) {

    return (
      <div className='w-full text-center'>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <>
      <MainTitle text={'Hi, ' + user.name + '. Here your cards!'} css='' />
      <div className='flex flex-wrap gap-8 justify-center my-28'>
        {
          cards.map((card, id) => {

            if (card.cardColor === "GOLD") {

              return <div key={id} className="bg-gradient-to-r from-yellow-400 via-yellow-50s0 to-yellow-600 w-80 h-48 rounded-xl p-4 shadow-lg text-white relative">
                <CardContent clientName={card.cardHolder} cardNumber={card.number} ccv={card.ccv} thruDate={card.thruDate} cardType={card.cardType} />
              </div>

            } else if (card.cardColor === "SILVER") {

              return <div key={id} className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 w-80 h-48 rounded-xl p-4 shadow-lg text-white relative">
                <CardContent clientName={card.cardHolder} cardNumber={card.number} ccv={card.ccv} thruDate={card.thruDate} cardType={card.cardType} />
              </div>

            } else {

              return <div key={id} className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 w-80 h-48 rounded-xl p-4 shadow-lg text-white relative">
                <CardContent clientName={card.cardHolder} cardNumber={card.number} ccv={card.ccv} thruDate={card.thruDate} cardType={card.cardType} />
              </div>

            }
          })
        }

      </div>
    </>
  )
}

export default CardsContainer

