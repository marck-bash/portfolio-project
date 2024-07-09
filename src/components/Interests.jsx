import React from 'react'
import DaisyUiNavBar from "./DaisyUiNavBar";
import HeroDaisyUi from './HomePage';
import Footer from './Footer';

export default function Interests() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className='flex-1 bg-base-300'>Interests Page</div>
        <Footer />
      </div>
    </div>
  </div>  )
}
