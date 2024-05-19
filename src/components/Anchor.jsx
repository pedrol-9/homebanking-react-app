import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = (props) => {
  return (
    <Link to={props.to} className={"w-[8rem] text-lg no-underline font-bold italic px-3 py-1 rounded-md " + props.className || ''}>
      <p className="text-[#1A4D2E]">{props.text || ''}</p>      
      {props.children}
    </Link>
  )
}

export default Anchor