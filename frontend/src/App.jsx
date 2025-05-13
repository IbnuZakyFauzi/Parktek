import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar' 
import Home from './pages/Home'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <div>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
