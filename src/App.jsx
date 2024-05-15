import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-1">
        <h1 className="text-3xl font-bold underline">
          Homebanking!
        </h1>
      </main>
      <Footer />      
    </div>
  )
}

export default App
