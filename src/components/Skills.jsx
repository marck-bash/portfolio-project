import React from 'react'
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';
import MERN from '../assets/MERN.jpg'
import MongoDBpng from '../assets/MongoDBpng.png'
import Express from '../assets/Express.png'

export default function Skills() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className='flex-1 bg-base-300 place-self-center lg:w-10/12 mt-6'>
          <div className="bg-base-300 text-4xl border-b-2 border-secondary lg:mb-10">Skills</div>
          <div className="flex justify-center my-4">
            <img
              src={MERN} alt="MERN" className="lg:w-[1000px] lg:h-[250px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-2xl flex mb-10 bg-base-300">
          I currently specialize in using the MERN tech stack to produce my work.  This includes 
          MongoDB for a database, utilizing Mongoose as an ODM, Express for back end development, 
          React for front end development, and Node.js for my JavaScript run-time environment.
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src={MongoDBpng} alt="mongoDB" className="h-[100px] w-[100px]"
              />
            </div>
            <div className="flex">
              <img
                src={Express} alt="express.js" className="h-[100px] w-[100px]"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>  )
}
