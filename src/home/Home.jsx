import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import FreeBooks from '../components/FreeBooks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <FreeBooks/>
      <Footer/>
    </div>
  )
}

export default Home