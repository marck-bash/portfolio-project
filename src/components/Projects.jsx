import React from 'react'
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';
import progressBar from '../assets/progressBar.png'

export default function Projects() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className='flex-1 bg-base-300 lg:mt-20 lg:px-24 px-2'>
          <div className="bg-base-300 text-4xl border-b-2 border-secondary lg:mb-10">Projects Page</div>
          <div className="text-6xl flex place-content-center">UNDER</div>
          <div className="text-6xl flex place-content-center mb-8 ">RENOVATION</div>
          <div className="text-xl flex place-content-center mb-2">PAGE NEARLY READY</div>
          <div className="flex place-content-center mb-10">
            <img src={progressBar} alt="In progress" className="h-[200px] w-[260px]"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>  )
}
