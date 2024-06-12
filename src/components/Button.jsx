import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, css, to, onClick }) => {
  return (
    <div className='flex justify-center my-4' >
      <Link to={to || ''} >
        <button className={'focus:outline-none text-white text-lg font-bold bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 ' + css || ''} onClick={onClick}>{text}</button>
      </Link>
    </div>
  )
}

export default Button