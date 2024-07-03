import React from 'react'
import headshotShrunk from './assets/MarckHeadshot256px.jpeg'
import DaisyUiNavBar from "./components/DaisyUiNavBar";

function App() {
  return (
    <div className="w-screen bg-hero-pattern h-screen flex flex-col items-center">
      <div className="flex flex-col bg-base-300 w-3/4 h-screen">
        <div className="flex flex-col">
          <nav>
            <DaisyUiNavBar />
          </nav>
          <div className='flex'>
            <figure>
              <img src={headshotShrunk} alt='headshot' className='rounded-lg mx-24' />
            </figure>
            <div className='flex flex-col'>
              <div className='text-4xl text-primary font-bold font-serif flex flex-wrap mx-36 w-3/4'>Full Stack Developer looking for work in web development.</div>
              <p className='flex flex-wrap mx-36 mt-12 w-3/4'>Currently working as a Full Stack Developer with Upright Education.  Recently finished a Tech Boot Camp specializing in the MERN tech stack. I have a background in Technical Support from my years working at Springfield College. I am looking to utilize my skills as a Full Stack Developer in a full-time capacity</p>
            </div>
            <ul>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
