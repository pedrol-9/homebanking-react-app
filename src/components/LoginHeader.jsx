import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Links } from '../Utils/Links.jsx';
import LogoutButton from './LogoutButton';

const LoginHeader = () => {
    const location = useLocation();

    const links = Links;
    // .filter(link => link.to !== "/");
  
    return (
      <header className="flex justify-center w-full items-center min-h-[10vh] bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E] shadow-lg relative shadow-xl">
        <div className='text-center w-fit ml-4 px-2'>
          <h2 className='text-[#E8DFCA] text-4xl font-bold'>HOMEBANKING</h2>
          <h2 className='italic text-[#E8DFCA] text-xs font-semibold'>Empowering your Financial Journey</h2>
        </div>
      </header>
    );
}

export default LoginHeader