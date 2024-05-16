import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './Home'
import Accounts from './pages/Accounts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Accounts />
    </MainLayout>
  )
}

export default App
