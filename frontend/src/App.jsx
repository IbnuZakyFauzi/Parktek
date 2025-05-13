import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar' 
import Home from './pages/Home'
import Footer from './components/Footer'
 
function App() {

  return (
    <>
      <div>
        <NavBar />
        <div>
          <Home />
        </div>
      </div>
        <Footer />
    </>
  )
}

export default App
