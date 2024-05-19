import React from 'react'

const Banner = ({ img }) => {
  return (
    <div className='flex-col flex w-full min-h-[5vh] font-bold bg-yellow-500 text-center my-8'>
      <img className="w-full h-full object-cover" src={img} alt="banner homebanking" />
    </div> 
  )
}

export default Banner