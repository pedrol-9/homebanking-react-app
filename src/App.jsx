import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
      </main>
      <footer className="card">        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </footer>   
    </>
  )
}

export default App
