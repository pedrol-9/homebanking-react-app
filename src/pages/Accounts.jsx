import React from 'react'
import AccCards from '../components/AccCards'
import Banner from '../components/Banner'
import NewAccBtn from '../components/NewAccBtn'

const Accounts = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='w-full text-center text-2xl font-extrabold my-4'>Welcome, Melba!</h1>
      <Banner/>         
      <div className='flex flex-wrap'> 
        <AccCards/>
      </div>
      <div className='flex justify-center my-4'>
        <NewAccBtn/>
      </div>
    </div> 
  )
}

export default Accounts