import React from 'react'
import Header from '../Pages/Header'
import Hero from '../Pages/Hero'
import About from '../Pages/About'
import Card from '../components/Card'

export default function HomeView() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Card/>
      <About/>
      
    </div>
  )
}
