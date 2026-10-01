import React from 'react'
import Hero from "../components/Hero"
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contacts from '../components/Contacts'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contacts />
    </div>
  )
}

export default Home