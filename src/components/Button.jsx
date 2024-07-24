import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, css, to, onClick }) => {
  return (
    <div className='flex justify-center items-center my-4' >
      <Link to={to || ''} className='flex m-1' >
        <button className={'focus:outline-none text-white text-lg font-bold bg-[#DAA520] hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 m-1 ' + css || ''} onClick={onClick}>{text}</button>
      </Link>
    </div>
  )
}

export default Button