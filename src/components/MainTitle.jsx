import React from 'react'

const MainTitle = (props) => {
  return (
    <h1 className={'w-full text-center text-2xl text-[#1A4D2E] font-extrabold my-4 ' + props.css || ''}>{props.text}</h1>
  )
}

export default MainTitle