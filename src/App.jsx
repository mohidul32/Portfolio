import { useState } from 'react'
import './App.css'
import './style.css'
import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/intro'
import Skill from './components/Skills/skill'
import Works from './components/Works/works'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
