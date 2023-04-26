import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Me from '../Components/Me'
import Heroimg2 from '../Components/Heroimg2'

const Personals = () => {
  return (
    <div>

        <Navbar/>
        <Heroimg2  heading="HOBBIES" text="Sports and My Lifestyle " />
        <Me/>
        <Footer/>
      
    </div>
  )
}

export default Personals
