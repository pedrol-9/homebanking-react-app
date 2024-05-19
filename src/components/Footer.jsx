import React from 'react'

const Footer = () => {

  return (
    <>
      <footer className="flex flex-wrap gap-4 justify-around items-center w-full bg-[#1A4D2E] text-center text-bold text-[#ffffff] italic py-4 bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <div className=''>
          <p className='ml-3'>Copyright &#169; 2024</p>
          <h5>Homebanking App - MindHub Cohort N°54</h5>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <h2>Follow us on our social media:</h2>
          <div className='flex gap-5 mr-3'>
            <a href="https://www.facebook.com" target="_blank">
              <img className="h-8 w-8" src="assets/imgs/facebookIcon.png" alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img className="h-8 w-8" src="assets/imgs/Instagram_icon.png.webp" alt="Instagram logo" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img className="h-8 w-8 rounded-[7px]" src="assets/imgs/logoX.avif" alt="X logo" />
            </a>
          </div>
        </div>


        <div className=''>
          <div className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Our customer's remarks!</div>
                <p className="block mt-1 text-lg leading-tight font-medium text-white">Excelent Bank!</p>
                <p className="mt-2 text-gray-400">Very intuitivve platform, and my saving are earning so much interests, this is great!</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>

  )
}

export default Footer

