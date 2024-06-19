import React from 'react';
import { Links } from '../Utils/Links'; // Asumiendo que tienes definida la lista de enlaces aquí
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);

  return (
    <>
      <footer className="flex flex-col md:flex-row lg:flex-wrap min-h-[10vh] justify-between items-center w-full text-center text-bold text-[#ffffff] italic py-3 px-8 bg-gradient-to-r from-[#1A4D2E] via-[#4F6F52] to-[#1A4D2E]">
        <div className='mb-4 sm:mb-0 lg:w-3/12 '>
          <p className='ml-3 text-[#a38666] font-bold'>Copyright &#169; 2024</p>
          <h5 className='text-[#E8DFCA]'>Homebanking App - MindHub Cohort N°54</h5>
          <div className='rounded-md bg-[#85A084] text-[#ffffff] px-3 py-1 mt-4'>
            <p className="font-bold">Contact: <a href="mailto:psanabria999@gmail.com" className="text-[#E8DFCA] font-thin">psanabria999@gmail.com</a></p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center xl:w-auto lg:w-3/12 xl:w-1/3 xs:mx-3 xl:mx-0 gap-4 mt-4 text-[#ffffff] text-sm">
          <NavLink to="#" className="mr-4 hover:underline">FAQ</NavLink>
          <NavLink to="#" className="mr-4 hover:underline">Send a PQRS</NavLink>
          {loggedIn &&
            <>
              <NavLink to="/ApplyLoans" className="mr-4 hover:underline">Apply for Loans</NavLink>
              <NavLink to="/ApplyCards" className="mr-4 hover:underline">Apply for Cards</NavLink>
            </>
          }
          {loggedIn && Links.map((link, index) => (
            <NavLink key={index} to={link.to} className="mr-4 hover:underline">{link.text}</NavLink>
          ))}
        </div>

        <div className='flex flex-col items-center gap-4 bg-[#85A084] rounded-lg p-4 mt-4 w-3/12 lg:w-3/12 xs:w-4/12 '>
          <h2 className='font-bold text-[#695608] text-lg mb-4'>Follow us on our social media</h2>
          <div className='flex gap-5'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="h-8 w-8" src="assets/imgs/facebookIcon.png" alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-8 w-8" src="assets/imgs/Instagram_icon.png.webp" alt="Instagram logo" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-8 w-8 rounded-[7px]" src="assets/imgs/logoX.avif" alt="X logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;



