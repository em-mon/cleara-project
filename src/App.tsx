import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <div>
          <Home />
        </div>
      </body>
    </>
  )
}

export default App
