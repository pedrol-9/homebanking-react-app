import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Accounts from './pages/Accounts'
import Cards from './pages/Cards'
import ApplyCards from './pages/ApplyCards'
import Loans from './pages/Loans'
import ApplyLoan from './pages/ApplyLoan'
import TransactionForm from './pages/TransactionForm';
import Home from './pages/Home'
import Register from './pages/Register'
// import MainLayout from './layouts/MainLayout'
import AccountTransactions from './pages/AccountTransactions'
import { useSelector } from 'react-redux'
import AuthorizedRoutes from './HOCs/AuthorizedRoutes'
import PublicRoutes from './HOCs/PublicRoutes'
import MainLayout from './layouts/MainLayout'

const authRoutes = [
  {
    key: 'accounts',
    path: '/Accounts',
    element: <Accounts />
  },
  {
    key: 'cards',
    path: '/Cards',
    element: <Cards />
  },
  {
    key: 'applyCards',
    path: '/ApplyCards',
    element: <ApplyCards />
  },
  {
    key: 'loans',
    path: '/Loans',
    element: <Loans />
  },
  {
    key: 'applyLoans',
    path: '/ApplyLoans',
    element: <ApplyLoan />
  },
  {
    key: 'transactionForm',
    path: '/TransactionForm',
    element: <TransactionForm />
  },
  {
    key: 'accountTransactions',
    path: '/AccountTransactions/:id',
    element: <AccountTransactions />
  }
]

const publicRoutes = [
  {
    key: 'home',
    path: '/',
    element: <Home />
  },
  {
    key: 'register',
    path: '/Register',
    element: <Register />
  }
]

function App() {

  // const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  // const loggedIn  = false

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {
            authRoutes.map(AuthorizedRoutes)
          }
          {
            publicRoutes.map(PublicRoutes)
          }
          <Route path="*" element={<Navigate to="/" />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

/* IMPLEMENTANDO SEGURIDAD EN LAS RUTAS 

// <Route path="*" element={ <Navigate to='/' />} />

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Accounts from './pages/Accounts';
import Cards from './pages/Cards';
import ApplyCards from './pages/ApplyCards';
import Loans from './pages/Loans';
import ApplyLoan from './pages/ApplyLoan';
import TransactionForm from './pages/TransactionForm';
import Home from './pages/Home';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const isAuthenticated = useSelector((state) => state.authReducer.loggedIn);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/Register' element={<Register />} />

                <Route path='/' element={isAuthenticated ? <MainLayout /> : <Navigate to="/Home" />}>
                    <Route index element={isAuthenticated ? <Accounts /> : <Navigate to="/Home" />} />
                    <Route path='/Cards' element={isAuthenticated ? <Cards /> : <Navigate to="/Home" />} />
                    <Route path='/ApplyCards' element={isAuthenticated ? <ApplyCards /> : <Navigate to="/Home" />} />
                    <Route path='/Loans' element={isAuthenticated ? <Loans /> : <Navigate to="/Home" />} />
                    <Route path='/ApplyLoans' element={isAuthenticated ? <ApplyLoan /> : <Navigate to="/Home" />} />
                    <Route path='/TransactionForm' element={isAuthenticated ? <TransactionForm /> : <Navigate to="/Home" />} />
                </Route>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App; */

/* VERSIÓN DE LEO

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Accounts from './pages/Accounts'
import Cards from './pages/Cards'
import ApplyCards from './pages/ApplyCards'
import SelectedAccount from './pages/SelectedAccount'
import Loans from './pages/Loans'
import ApplyLoan from './pages/ApplyLoan'
import TransactionForm from './pages/TransactionForm'
import Home from './pages/Home'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/Home' element={<Home />} />
        <Route path='/Register' element={<Register />} />

        <Route path='/' element={<MainLayout />}>
          <Route index  element={<Accounts />} />
          <Route path='/Cards' element={<Cards />} />
          <Route path='/ApplyCards' element={<ApplyCards />} />
          <Route path='/Loans' element={<Loans />} />
          <Route path='/ApplyLoans' element={<ApplyLoan />} />
          <Route path='/TransactionForm' element={<TransactionForm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App */


/* VERSIÓN MÁS ANTIGUA

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Accounts from './pages/Accounts'
import Cards from './pages/Cards'
import ApplyCards from './pages/ApplyCards'
import SelectedAccount from './pages/SelectedAccount'
import Loans from './pages/Loans'
import ApplyLoan from './pages/ApplyLoan'
import TransactionForm from './pages/TransactionForm'
import Home from './pages/Home'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Accounts' element={<Accounts />} />
        <Route path='/Cards' element={<Cards />} />
        <Route path='/ApplyCards' element={<ApplyCards />} />
        <Route path='/Loans' element={<Loans />} />
        <Route path='/ApplyLoans' element={<ApplyLoan />} />
        <Route path='/TransactionForm' element={<TransactionForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App */