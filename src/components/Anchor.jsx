import React from 'react'

const Anchor = (props) => {
  return (
    <a href={props.href} className={"text-lg no-underline font-light italic px-3 py-1 text-white rounded-md " + props.className || ''}>
      <p>{props.text || ''}</p>
      {props.children}
    </a>
  )
}

export default Anchor