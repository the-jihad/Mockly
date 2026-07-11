import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Herosection'
import ApiSection from '../components/Apisection'
import QuickStartSection from '../components/QuickStartSection'
import TechnologySection from '../components/TechnologySection'
import FAQSection from '../components/FAQsection'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <ApiSection limit={3} showViewAll={true}/>
        <QuickStartSection/>
        <TechnologySection/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default page