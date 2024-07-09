import React from 'react';
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';

export default function About() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen bg-base-300"> { /* Outter div min-h-screen, body content div flex-1 */ }
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className='flex-1 bg-base-300'>About Page</div>
        <Footer />
      </div>
    </div>
  </div>
  )
}
