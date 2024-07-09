import React from 'react';
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';
import MERN from '../assets/MERN.jpg';
import MongoDBpng from '../assets/MongoDBpng.png';
import Express from '../assets/Express.png';
import reactSVG from '../assets/react.svg';
import nodeJs from '../assets/Nodejs.png';
import tailwindCSS from '../assets/TailwindCSS.png';
import javascript from '../assets/javascript.png';

export default function Skills() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen bg-base-300">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className='flex-1 bg-base-300 place-self-center lg:mt-20 lg:px-24'>
          <div className="bg-base-300 text-4xl border-b-2 border-secondary lg:mb-10">Skills</div>
          <div className="flex justify-center my-4">
            <img
              src={MERN} alt="MERN" className="lg:w-[1000px] lg:h-[250px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-2xl flex mb-10 bg-base-300">
          I currently specialize in using JavaScript as a programming language in conjunction with the MERN tech stack to produce my work.  This includes 
          MongoDB for a database, utilizing Mongoose as an ODM, Express for back end development, 
          React for front end development, and Node.js for my JavaScript run-time environment.
          </div>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex gap-20">
              <img
                src={javascript} alt="JavaScript" className="h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2">
                <p className="place-self-center">JavaScript</p>
                <p className="border-t-2 border-secondary"></p>
                <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.
                   99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.
                </p>
              </div>
            </div>
            <div className="flex gap-20">
              <img
                src={MongoDBpng} alt="mongoDB" className="h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2">
                <p className="place-self-center">MongoDB</p>
                <p className="border-t-2 border-secondary"></p>
                <p>MongoDB is a source-available, cross-platform, document-oriented database program.
                   Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
                    MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License
                </p>
              </div>
            </div>
            <div className="flex gap-20">
              <img
                src={Express} alt="express.js" className="h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2">
                <p className="place-self-center">Express</p>
                <p className="border-t-2 border-secondary"></p>
                <p>
                  Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js,
                   released as free and open-source software under the MIT License. It is designed for building web applications and APIs.
                    It has been called the de facto standard server framework for Node.js
                </p>
              </div>
            </div>
            <div className="flex gap-20">
              <img
                src={reactSVG} alt="react" className="h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2">
                <p className="place-self-center">React</p>
                <p className="border-t-2 border-secondary"></p>
                <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc.
                   It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile,
                    or server-rendered applications with frameworks like Next.js
                </p>
              </div>
            </div>
            <div className="flex gap-20">
              <img
               src={nodeJs} alt="nodeJS" className="h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2">
                <p className="place-self-center">Node.js</p>
                <p className="border-t-2 border-secondary"></p>
                <p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.
                   Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use
                    JavaScript to write command line tools and for server-side scripting.
                </p>
              </div>
            </div>
            <div className="flex gap-20">
              <img
               src={tailwindCSS} alt="TailwindCSS" className="h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2">
                <p className="place-self-center">Tailwind CSS</p>
                <p className="border-t-2 border-secondary"></p>
                <p>Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap,
                   it does not provide a series of predefined classes for elements such as buttons or tables.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>  )
}
