import React from 'react'
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';

export default function WorkHistory() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen bg-base-300">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className="flex-1 place-self-center lg:mt-20 bg-base-300 lg:px-24 px-2">
          <div className="bg-base-300 text-4xl border-b-2 border-secondary lg:mb-10">Work History</div>
          
        </div>
      </div>
        <Footer />
    </div>
  </div>  )
}
