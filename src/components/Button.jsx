import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, css, to }) => {
  return (
    <div className='flex justify-center my-4'>
      <Link to={to || ''}>
        <button className={' my-4 cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-md hover:shadow-green-400 shadow-green-500 active:shadow-none' + css || ''}>{text}</button>
      </Link>
    </div>
  )
}

<button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Button
</button>

export default Button