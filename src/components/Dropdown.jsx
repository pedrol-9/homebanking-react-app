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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l.061.092 4 6a1 1 0 01-.832 1.463H5.939a1 1 0 01-.832-1.463l.061-.092 4-6A1 1 0 0110 3zM4 12a1 1 0 01.117 1.993L4 14H3a1 1 0 01-.117-1.993L3 12h1zm12 0a1 1 0 01.117 1.993L16 14h-1a1 1 0 01-.117-1.993L15 12h1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
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
