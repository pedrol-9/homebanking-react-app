import React from 'react'
import MainTitle from '../components/MainTitle'
import TableTransactions from '../components/TableTransations'

import AccCards from '../components/AccCards'
import MainLayout from '../layouts/MainLayout'

const SelectedAccount = () => {
  return (
    <>
      <MainLayout>
        <MainTitle text='Your Selected Account' />
        <div className='w-full flex flex-wrap justify-center'>
          <div className='w-1/3'>
            <AccCards />
          </div>
          <div className="w-4/5">
            <TableTransactions />
          </div>
        </div>
        
      </MainLayout>
    </>

  )
}

export default SelectedAccount