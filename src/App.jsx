import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Eperience from './components/sections/Eperience'
import Certience from './components/sections/Certience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Eperience/>
   <Certience/>
   <Projects/>
   <Contact/>

   </>
  )
}

export default App
