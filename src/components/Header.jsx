import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import {Links} from '../Utils/Links.jsx'

let Header = () => {
  const location = useLocation();

  const links = Links
  // .filter(link => link.to !== "/");

  return (
    <header className="flex justify-between w-full items-center min-h-[10vh] bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E] shadow-lg relative shadow-xl">
      <div className='text-center w-fit ml-4 px-2'>
        <h2 className='text-[#E8DFCA] text-4xl font-bold'>HOMEBANKING</h2>
        <h2 className='italic text-[#E8DFCA] text-xs font-semibold'>Empowering your Financial Journey</h2>
      </div>

      <nav className="flex w-full justify-end">
        <div className='flex items-center justify-end shrink-0 mr-2'>
          <div className="flex space-x-4 p-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`bg-[#1A4D2E] text-lg font-bold italic px-3 py-1 rounded-md transition-all ${location.pathname === link.to ? 'bg-[#1A4D2E] text-[#E8DFCA]' : 'bg-[#E8DFCA] text-[#1A4D2E] hover:text-[#000000]'}`}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header


{/* <nav className="flex w-full justify-end">
        <div className='flex items-center justify-end shrink-0 mr-2'>
          <nav className="flex space-x-4 p-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`bg-[#1A4D2E] ` +
                  (location.pathname === link.to
                    ? 'text-lg font-bold italic px-3 py-1 rounded-md transition-all bg-[#1A4D2E] text-[#E8DFCA]' // Estilo para el enlace activo
                    : 'text-lg font-semibold hover:font-bold italic px-3 py-1 rounded-md transition-all bg-[#E8DFCA] text-[#1A4D2E] hover:text-[#000000]') // Estilo para los enlaces inactivos
                }
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </nav> */ }
