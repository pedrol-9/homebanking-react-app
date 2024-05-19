import React from 'react'
import MainTitle from '../components/MainTitle'
import CardsContainer from '../components/CardsContainer'
import Button from '../components/Button'
import MainLayout from '../layouts/MainLayout'

const Cards = () => {
  return (
    <MainLayout>
      <div className='flex flex-col'>
        {/* <MainTitle text='Your Cards' /> */}
        <CardsContainer />
        <Button text='Request New Card' to='/ApplyCards' />
      </div>
    </MainLayout>
  )
}

export default Cards