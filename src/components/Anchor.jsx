import React from 'react'

const Anchor = (props) => {
  return (
    <a href={props.href} className={"text-bold text-2xl no-underline italic bg-yellow-900 px-3 py-1 text-white rounded-md border-white border " + props.className || ''}>{props.text}</a>
  )
}

export default Anchor