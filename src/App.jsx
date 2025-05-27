import { useState } from 'react'
import './App.css'
import NavBar from "./components/Navbar/navbar"
import Hero from "./components/Body/hero"
import Work from "./components/Work/work"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    {/* <Work/> */}
    </>
  )
}

export default App
