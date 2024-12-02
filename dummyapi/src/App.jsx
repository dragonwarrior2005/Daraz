import React from 'react'
import './App.css'
import { Navsection } from './components/Navbar'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { Products } from './components/Products'

function App() {

  return (
    <>
    <Navsection></Navsection>
    <Banner/>
    <Products></Products>
    <Footer/>

    </>
  )
}

export default App
