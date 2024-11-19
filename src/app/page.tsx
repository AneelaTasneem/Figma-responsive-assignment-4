import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Arrival from './Components/Arrival'
import Selling from './Components/Selling'
import Style from './Components/Style'
import Customers from './Components/Customers'
import Footer from './Components/footer'


const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Arrival />
      <Selling />
      <Style />
      <Customers />
      <Footer />
     
    </div>
  )
}

export default page
