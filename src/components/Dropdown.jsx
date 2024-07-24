import { useState, useEffect, useRef } from 'react';
import { Links } from '../Utils/Links';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = Links;
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-full w-full p-1" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm py-2 pl-3 pr-1 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute -right-16 mt-2 w-40 rounded-md shadow-lg bg-[#E8DFCA] ring-1 opacity-90 ring-black ring-opacity-5">
          <div className="py-.5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                class="block px-2 py-1 text-start text-gray-700 hover:text-gray-900 hover:italic hover:font-extrabold hover:bg-gray-100 "
                className={({isActive}) => `block px-2 py-1 text-start hover:text-gray-900 hover:italic hover:font-extrabold hover:bg-gray-100 ${isActive ? 'bg-[#DAA520] text-white font-bold' : 'text-gray-700'}`} 
                role="menuitem" 
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

/* 

className="block px-2 py-1 text-start text-gray-700 hover:text-gray-900 hover:italic hover:font-extrabold hover:bg-gray-100 "

<div className={({isActive}) => `${isActive ? 'bg-[#7EBD7A]' : 'origin-top-right absolute -right-16 mt-2 w-40 rounded-md shadow-lg bg-[#E8DFCA] ring-1 opacity-90 ring-black ring-opacity-5'}`}>

{isOpen && (
  <div className="origin-top-right absolute -right-16 mt-2 w-40 rounded-md shadow-lg bg-[#E8DFCA] ring-1 opacity-90 ring-black ring-opacity-5">
    <div className="py-.5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="block px-2 py-1 text-start text-gray-700 hover:text-gray-900 hover:italic hover:font-extrabold hover:bg-gray-100 " role="menuitem" onClick={() => setIsOpen(false)}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  </div>
)} */
