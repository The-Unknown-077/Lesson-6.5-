import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Add from './components/add/Add'
import Testimonials from './components/testimonials/Testimonials'



function App() {

  return (
    <>
      <div className="min-h-[100vh] relative w-[100%]">
        <Header />
        <Hero/>
      </div>
      <Products/>
      <Add/>
      <Testimonials/>
    </>
  )
}

export default App
