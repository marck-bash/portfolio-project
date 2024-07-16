import React from 'react';
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';
import SuitSelfie from '../assets/SuitSelfie.jpg'

export default function About() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen bg-base-300"> { /* (To get the footer to stay at bottom of screen) Outter div min-h-screen, body content div flex-1 */ }
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className="flex-1 lg:mt-20 bg-base-300 lg:px-24 px-2">
          <div className='bg-base-300 text-4xl border-b-2 border-secondary mb-10'>About</div>
          <div className='lg:flex gap-10 mb-10 bg-base-300'>
            <img src={SuitSelfie}  alt="selfie" className="h-[320px] rounded-lg shadow-2xl mb-4" />
            <div className="flex text-3xl text-primary font-bold mb-4">
              Budding software developer, focused on using my skills to create beautiful, fast, and effective web applications.
            </div>
            <div className="flex w-3/4">
              My name is Marck Bashaw.  I am from Springfield, Massacusetts.  
              I've recently completed a software development bootcamp 
              through Upright Education.  While working with Upright, I learned a new set of skills
              utilizing modern tools to create web applications.  This has allowed me to gain knowledge,
              and coding experience, not just in the classroom, but in the real world as well.  At the end of the bootcamp, 
              I was given a capstone project that involved creating an application for Seven Brew Coffee.  I worked along three 
              other students in the class to create an application that allowed Seven Brew to give their employees 
              training and testing.  Some of my notable contributions to that project were creating Admin permission levels 
              and allowing Admins and Managers to deal with employee account creation and management.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
  )
}
