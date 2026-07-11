import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Herosection'
import ApiSection from '../components/Apisection'
import QuickStartSection from '../components/QuickStartSection'
import TechnologySection from '../components/TechnologySection'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <ApiSection limit={3} showViewAll={true}/>
        <QuickStartSection/>
        <TechnologySection/>
    </div>
  )
}

export default page