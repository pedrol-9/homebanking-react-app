import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-wrap justify-between w-full bg-[#1A4D2E] text-center text-bold text-[#ffffff] italic py-4'>
      <p className='ml-3'>Copyright &#169; 2024</p>
      <h5>Homebanking App - MindHub Cohort N°54</h5>
      <div className='flex gap-5 mr-3'>
        <a href="">
          <img className="h-8 w-8" src="assets/imgs/facebookIcon.png" alt="facebook logo" />
        </a>
        <a href="">
          <img className="h-8 w-8" src="assets/imgs/Instagram_icon.png.webp" alt="Instagram logo" />
        </a>
        <a href="https://twitter.com/">
          <img className="h-8 w-8 rounded-[7px]" src="assets/imgs/logoX.avif" alt="X logo" />
        </a>
      </div>
    </footer>
  )
}

export default Footer