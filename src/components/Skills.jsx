import React from 'react'
import DaisyUiNavBar from "./DaisyUiNavBar";
import HeroDaisyUi from './HomePage';
import Footer from './Footer';

export default function Skills() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col">
        <nav>
          <DaisyUiNavBar />
        </nav>
        {/* Place Content Here */}
        <Footer />
      </div>
    </div>
  </div>  )
}
