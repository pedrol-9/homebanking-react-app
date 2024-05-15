import React from 'react'
import Anchor from './Anchor'

const Header = () => {
  const anchors = [
    {text:"Accounts", href:"#"},
    {text:"Cards", href:"#"},
    {text:"Loans", href:"#"},
  ]

  return (
    <header className='w-full bg-orange-800 text-center py-1'>
        <nav className="flex gap-4 w-full justify-end pr-2">
          {anchors.map((anchor) => {
            return <Anchor key={anchor.text} text={anchor.text} hhref={anchor.href} className="block"/>
          })}
        </nav>
    </header>
  )
}

export default Header