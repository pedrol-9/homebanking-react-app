import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Accounts from './pages/Accounts'
import Cards from './pages/Cards'
import ApplyCards from './pages/ApplyCards'
import SelectedAccount from './pages/SelectedAccount'
import Loans from './pages/Loans'
import ApplyLoan from './pages/ApplyLoan'
import Transactions from './pages/Transactions'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accounts/>} /> 
      <Route path='/Cards' element={<Cards/>} />
      <Route path='/ApplyCards' element={<ApplyCards/>} />
      <Route path='/Loans' element={<Loans/>} />
      <Route path='/ApplyLoans' element={<ApplyLoan/>} />
      <Route path='/Transactions' element={<Transactions/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
