import React from 'react';
import { NavLink } from 'react-router-dom';
import { Links } from '../Utils/Links.jsx';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';
import Dropdown from './Dropdown.jsx';

let Header = () => {
  const { loggedIn } = useSelector(store => store.authReducer);

  const links = Links;
  // from-[#1A4D2E]

  return (
    <header className="flex flex-col xl:flex-row justify-between items-center w-full min-h-[10vh] bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E] shadow-lg relative shadow-xl p-4">
      <div className='text-center w-full md:w-fit md:ml-4 px-2 mb-4 md:mb-0 '>
        <NavLink className='text-[#E8DFCA] xs:text-5xl lg:text-4xl font-bold' to={ loggedIn && "/Accounts"}>HOMEBANKING</NavLink>
        <h2 className='italic text-[#E8DFCA] text-xs md:text-sm lg:text-xs font-semibold'>Empowering your Financial Journey</h2>
      </div>

      <div className='flex sm:flex-row w-full justify-center xl:justify-end mt-2 xl:mt-0 xl:relative pr-2'>
        <nav className="flex justify-center w-full xl:w-fit md:justify-end ">
          <div className='flex flex-col w-full items-start justify-center xl:flex-row gap-2 p-2'>
            {/* Mostrar Dropdown en xs a md */}
            <div className="block lg:hidden">
              <Dropdown />
            </div>
            {/* Mostrar links de navegación en lg */}
            <div className="hidden flex-col lg:flex lg:flex-row w-full gap-2 items-center justify-end p-2 m-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `
                    w-full xs:w-full sm:w-full md:w-[10/12] lg:w-10/12 xl:w-[11rem] 
                    text-center text-lg xl:text-xl font-semibold px-4 py-2 rounded-lg 
                    transition-all 
                    ${isActive ? 'bg-[#DAA520] text-[#E8DFCA]' : 'bg-[#E8DFCA] text-[#1A4D2E]'}
                    shadow-md hover:shadow-lg transform hover:scale-105
                  `}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
