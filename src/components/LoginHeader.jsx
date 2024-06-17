import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Links } from '../Utils/Links.jsx';
import { useSelector } from 'react-redux';

const LoginHeader = () => {
    const location = useLocation();
    const { loggedIn } = useSelector(store => store.authReducer)

    const links = Links;
  
    return (
      <header className="flex justify-center w-full items-center min-h-[10vh] bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E] shadow-lg relative shadow-xl">
        <div className='text-center w-fit ml-4 px-2'>
          <NavLink className='text-[#E8DFCA] text-4xl font-bold' to={ !loggedIn && "/"}>HOMEBANKING</NavLink>
          <h2 className='italic text-[#E8DFCA] text-xs font-semibold'>Empowering your Financial Journey</h2>
        </div>
      </header>
    );
}

export default LoginHeader