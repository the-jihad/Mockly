import React from 'react'
import Navbar from '../components/Navbar'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
         <div className='py-5'>
            {children}
         </div>
    </div>
  )
}

export default layout