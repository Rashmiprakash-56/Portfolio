import { useState, useRef} from 'react'
import './App.css'
import Navbar from './Sections/Navbar/Navbar'
import Home from './Sections/Home/Home'
import About from './Sections/About/About'
import Projects from './Sections/Projects/Projects'
import Contacts from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'


function App() {

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  return (
    <>
     <Navbar/>
     <Home scrollToProjects={scrollToProjects}/>
     <About/>
     <Projects ref={projectsRef}/>
     <Contacts />
     <Footer/>
    </>
  )
}

export default App
