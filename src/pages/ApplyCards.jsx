import React from 'react'
import Button from '../components/Button'
import MainTitle from '../components/MainTitle'
import SelectCardType from '../components/SelectCardType'
import SelectCardMembership from '../components/SelectCardMembership'
import MainLayout from '../layouts/MainLayout'
import Banner from '../components/Banner'

const ApplyCards = () => {
  return (
    <>
      <MainLayout>
        <Banner img='\assets\imgs\cheerfulWomanBlue.jpg' />
        <MainTitle text="Apply for a Card" />
        <div className='flex justify-center w-full items-center mt-4 mb-10'>
          <form className="w-1/2 flex flex-col m-4 bg-[#4F6F52] rounded-md p-4 border border-[3px] border-[#000000]">
            <SelectCardType />
            <SelectCardMembership />

            <div className='w-full flex justify-center gap-2'>
              <Button text='Apply' />
              <Button text='Cancel' />
            </div>

            <figure className='flex justify-center'>
              <img className='w-3/5' src="/assets/imgs/applyCards.png" alt="image of credit cards" />
            </figure>
          </form>
        </div>
      </MainLayout>
    </>

  )
}

export default ApplyCards