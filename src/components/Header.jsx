import React from 'react'
import Anchor from './Anchor'

const Header = () => {
  const anchors = [
    { text: "Accounts", to: "/" },
    { text: "Cards", to: "/Cards" },
    { text: "", to: '/' },
    { text: "Loans", to: "/Loans" },
    { text: "Transactions", to: "/Transactions" }
  ]

  return (


    <header className="flex items-end w-full min-h-[13vh] bg-[#1A4D2E] text-center py-2 relative ">
      <nav className="flex gap-4 w-full h-full justify-around items-center px-2 ">
        {anchors.map((anchor) => {
          if (anchor.text === "") {
            return (
              <Anchor key={anchor.text} text={anchor.text} to={anchor.to} className="no-block w-fit text-[#1A4D2E] px-0 py-0 ">
                <div className="w-[180px] absolute left-1/2 transform -translate-x-1/2 -bottom-20 ">
                  <img className="rounded-full " src="/assets/imgs/logoCircular.png" alt="Homebanking Logo" />
                </div>
              </Anchor>
            );
          }

          return (
            <Anchor
              key={anchor.text}
              text={anchor.text}
              to={anchor.to}
              className="block bg-[#F5EFE6] self-end shadow-[0_0_8px_4px_#4F6F52] mb-4 text-[#1A4D2E] px-4 py-2 rounded-lg"
            />
          );
        })}
      </nav>
    </header>


  )
}

export default Header

{/* <header className='w-full min-h-[10vh] bg-[#1A4D2E] text-center py-2'>
      <nav className="flex gap-4 w-full h-full justify-around items-center px-2 relative">

        {anchors.map((anchor) => {
          
          if (anchor.text == "") {
            return (
              <Anchor key={anchor.text} text={anchor.text} to={anchor.to} className="no-block w-fit text-[#1A4D2E] px-0 py-0 ">
                <div className="w-[150px] absolute -bottom-20 ">
                  <img className="rounded-[50%] object-fit" src="/assets/imgs/logoCircular.png" alt="Homebanking Logo" />
                </div>
              </Anchor>
            )
          }

          return <Anchor key={anchor.text} text={anchor.text} to={anchor.to} className="block bg-[#F5EFE6] self-end shadow-[0_0_8px_4px_#4F6F52] mb-4" />

        })}

      </nav>
    </header> */}