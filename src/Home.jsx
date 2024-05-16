import React from 'react'
import Banner from './components/Banner'
import AccCards from './components/AccCards'

const Home = (props) => {
  return (
    <div className='flex flex-wrap'>
      <h1 className="text-center text-2xl font-extrabold my-4">Home</h1>
      <div className='flex-col flex w-full h-[30vh] font-bold border border-2 bg-yellow-500 text-center my-2'>Carrousel
      </div>      
    </div> 
  )
}

export default Home