import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, css, to }) => {
  return (
    <div className='flex justify-center my-4'>
      <Link to={to || ''}>
        <button className={'bg-[#4F6F52] h-fit py-1 px-2 rounded-md font-bold text-[#E8DFCA] my-4 ' + css || ''}>{text}</button>
      </Link>
    </div>
  )
}

export default Button