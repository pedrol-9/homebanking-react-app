import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CreditCard from './CreditCard'

const CardsContainer = () => {

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/clients/1');
        console.log(response.data)
        console.log(response.data.cards)
        setCardData(response.data.cards);
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    }

    fetchCardData();
  }, []);

  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {
        cardData.map((card, id) => {
          if (card.type == 'Credit') {
            return <CreditCard key={id} clientName={card.cardHolder} cardNumber={card.number} ccv={card.ccv} thruDate={card.thruDate} cardType={card.cardType} />
          }

          return <CreditCard key={id} clientName={card.cardHolder} cardNumber={card.number} ccv={card.ccv} thruDate={card.thruDate} cardType={card.cardType} />
        }
        )
      }
    </div>

  )
}

export default CardsContainer

