import React from 'react'
import MainTitle from './MainTitle'

const CardSection = ({ /* img, */ alt, css, type }) => {
  return (
    <div className="bg-white w-48 min-h-64 rounded-lg w-[40%] m-8">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-[#1A4D2E] inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-[#4F6F52] inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-[#E8DFCA] box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>

        <div id="credit-cards" className="flex flex-wrap gap-4">
          <MainTitle css="font-lg" text={type} />
          {/* <img className={css || ''} src={img} alt={alt} /> */}
          <div id="card-info" className=''>
            <h3 className=''></h3>

          </div>
        </div>
      </div>
  )
}

export default CardSection