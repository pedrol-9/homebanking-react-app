import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardContent from './CardContent'
import MainTitle from './MainTitle';

const CardsContainer = () => {

  const [cardData, setCardData] = useState([]);
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("CardsContainer Mounted")

    const fetchCardData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:8080/api/clients/2');
        console.log(response.data)
        console.log(response.data.cards)
        setClient(response.data)
        setCardData(response.data.cards);
      } catch (err) {
        console.error('Error fetching data: ', err);
      } finally {
        setLoading(false)
        console.log(loading)
      }
    }

    fetchCardData();
  }, []);

  if (!cardData) {
    return (
      <div className='w-full text-center'>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <>
      <MainTitle text={'Hi, ' + client.firstName + '. Here your cards!'} css='' />
      <div className='flex flex-wrap gap-8 justify-center my-28'>
        {
          cardData.map((card, id) => {

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

