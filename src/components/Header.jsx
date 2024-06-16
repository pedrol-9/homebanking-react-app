import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Links } from '../Utils/Links.jsx';
import LogoutButton from './LogoutButton';
// import { useSelector } from 'react-redux';


let Header = () => {
  const location = useLocation();

  /// const { loggedIn } = useSelector(store => store.authReducer)

  const links = Links;

  return (
    <header className="flex flex-col xl:flex-row justify-between items-center w-full min-h-[10vh] bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E] shadow-lg relative shadow-xl p-4 md:p-2">
      <div className='text-center w-full md:w-fit md:ml-4 px-2 mb-4 md:mb-0 '>
        <h2 className='text-[#E8DFCA] xs:text-3xl lg:text-4xl font-bold'>HOMEBANKING</h2>
        <h2 className='italic text-[#E8DFCA] text-xs md:text-sm lg:text-xs font-semibold'>Empowering your Financial Journey</h2>
      </div>

      <div className='flex sm:flex-col xl:flex-row w-full xs:w-3/5 justify-center md:justify-end mt-2 xl:mt-0 xl:relative'>
        <nav className="flex  justify-center md:justify-end m-2">
          <div className='flex flex-col w-full xl:flex-row gap-2 items-center justify-end p-2 m-2'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  w-full xs:w-full sm:w-full md:w-[10/12] lg:w-10/12 xl:w-[11rem] 
                  text-center text-lg xl:text-xl font-semibold px-4 py-2 rounded-lg 
                  transition-all 
                  ${isActive ? 'bg-[#1A4D2E] text-[#E8DFCA]' : 'bg-[#E8DFCA] text-[#1A4D2E] hover:bg-[#7EBD7A] hover:text-[#E8DFCA]'}
                  shadow-md hover:shadow-lg transform hover:scale-105
                `}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </nav>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;


/* VERSIÓN CON RESPONSIVE

className={`w-full xs:w-full sm:w-full md:w-[10/12] lg:w-10/12 xl:w-[11rem] text-center text-lg xl:text-xl font-bold italic px-3 py-1 rounded-md transition-all ${location.pathname === link.to ? 'bg-[#1A4D2E] text-[#E8DFCA]' : 'bg-[#E8DFCA] text-[#1A4D2E] hover:text-[#000000]'}`}

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Links } from '../Utils/Links.jsx';
import LogoutButton from './LogoutButton';

let Header = () => {
  const location = useLocation();

  const links = Links;

  return (
    <header className="flex flex-col xl:flex-row justify-between items-center w-full min-h-[10vh] bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E] shadow-lg relative shadow-xl p-4 md:p-2">
      <div className='text-center w-full md:w-fit md:ml-4 px-2 mb-4 md:mb-0 '>
        <h2 className='text-[#E8DFCA] xs:text-3xl lg:text-4xl font-bold'>HOMEBANKING</h2>
        <h2 className='italic text-[#E8DFCA] text-xs md:text-sm lg:text-xs font-semibold'>Empowering your Financial Journey</h2>
      </div>

      <div className='flex sm:flex-col xl:flex-row w-full xs:w-3/5 justify-center md:justify-end mt-2 xl:mt-0 xl:relative'>
        <nav className="flex  justify-center md:justify-end m-2">
          <div className='flex flex-col w-full xl:flex-row gap-2 items-center justify-end p-2 m-2'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`w-full xs:w-full sm:w-full md:w-[10/12] lg:w-10/12 xl:w-[11rem] text-center text-lg xl:text-xl font-bold italic px-3 py-1 rounded-md transition-all ${location.pathname === link.to ? 'bg-[#1A4D2E] text-[#E8DFCA]' : 'bg-[#E8DFCA] text-[#1A4D2E] hover:text-[#000000]'}`}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </nav>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header; */

