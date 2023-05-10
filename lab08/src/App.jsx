import { useState } from 'react'
import Header from './components/header'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
     <Header/>
     
    </>
  )
}

export default App
