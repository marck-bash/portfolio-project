import React from 'react';
import { Link } from 'react-router-dom';
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';
import MERN from '../assets/MERN.jpg';
import MongoDBpng from '../assets/MongoDBpng.png';
import Express from '../assets/Express.png';
import reactSVG from '../assets/react.svg';
import nodeJs from '../assets/Nodejs.png';
import tailwindCSS from '../assets/TailwindCSS.png';
import javascript from '../assets/javascript.png';
import JsCredly from '../assets/JsCredly.png';
import FullStackCredly from '../assets/FullStackCredly.png';
import MongoDbCredly from '../assets/MongoDbCredly.png';
import ReactFrontEndCredly from '../assets/ReactFrontEndCredly.png';

export default function Skills() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen bg-base-300">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className='flex-1 bg-base-300 place-self-center lg:mt-20 lg:px-24 px-2'>
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
                    I use and ODM called Mongoose to interact with my database on my server side.
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
                    or server-rendered applications.  I prefer to use this front end for my HTML components because of it is robust and easy to use.
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
                   Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js allows me to use
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
                   it does not provide a series of predefined classes for elements such as buttons or tables.  It also allows me to use helpful plug-ins such DaisyUI for customization of themes.
                </p>
              </div>
            </div>
            <div className="bg-base-300 text-4xl border-b-2 border-secondary">Credentials</div>
            <div>Below are links to the credentials I have earned through Upright Education.  These were acquired through months of real world exposure to these technologies.</div>
            <div className="flex lg:place-content-center lg:flex-row lg:gap-10 flex-col place-items-center">
              <a href="https://www.credly.com/badges/ad9d08c1-0d70-4590-a371-eb53f259ac8c" target="_blank" rel='noopener noreferrer'>
                <img
                  src={FullStackCredly} alt='Full Stack Developer' className="h-[250px] w-[250px]"
                />
              </a>
              <a href="https://www.credly.com/badges/86c3ed88-d91c-40cf-b02e-8c61f2b05139" target="_blank" rel='noopener noreferrer'>
                <img
                  src={JsCredly} alt='JavaScript' className="h-[250px] w-[250px]"
                />
              </a>
              <a href="https://www.credly.com/badges/651f3799-ebf8-4ed2-bfea-6f77469be226" target="_blank" rel='noopener noreferrer'>
                <img
                  src={MongoDbCredly} alt='Mongo DB' className="h-[250px] w-[250px]"
                />
              </a>
              <a href="https://www.credly.com/badges/651f3799-ebf8-4ed2-bfea-6f77469be226" target="_blank" rel='noopener noreferrer'>
                <img
                  src={ReactFrontEndCredly} alt='React' className="h-[250px] w-[250px]"
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>  )
}
