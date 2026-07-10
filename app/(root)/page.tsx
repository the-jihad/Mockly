import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Herosection'
import ApiSection from '../components/Apisection'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <ApiSection limit={3} showViewAll={true}/>
    </div>
  )
}

export default page