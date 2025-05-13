import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar' 
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
