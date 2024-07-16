import React from 'react'
import DaisyUiNavBar from "./DaisyUiNavBar";
import Footer from './Footer';
import PdfViewer from './PdfViewer';
import file from '../assets/MarckBashawResume-1.pdf';

export default function WorkHistory() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
    <div className="flex flex-col bg-base-300 w-3/4 h-screen">
      <div className="flex flex-col min-h-screen bg-base-300">
        <nav>
          <DaisyUiNavBar />
        </nav>
        <div className="flex-1 lg:mt-20 bg-base-300 lg:px-24 px-2">
          <div className="bg-base-300 text-4xl border-b-2 border-secondary lg:mb-10">Work History</div>
          <div className="hidden lg:flex flex-row place-content-center gap-10">
            <a href={file} className="button bg-primary w-[50px] h-[50px] rounded-lg flex items-center justify-center border-2 border-neutral" download>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
              </svg>
            </a>
            <PdfViewer />
          </div>
          <div className="lg:hidden flex flex-col place-items-center mt-10">
            <p className="text-lg">Marck Bashaw</p>
            <p>Springfield, MA | 
              <span><a href="mailto:marckbashaw@gmail.com" target="_blank" rel='noopener noreferrer' className="text-blue-600"> marckbashaw@gmail.com </a></span>
              <span><a href="https://www.linkedin.com/in/marck-bashaw-90264b2ab/" rel='noopener noreferrer' className="text-blue-600">| LinkedIn </a></span>
              <span><a href="https://github.com/marck-bash" rel='noopener noreferrer' className="text-blue-600">| GitHub </a></span>
              <span><a href="https://marck-bash.github.io/portfolio-project/" rel='noopener noreferrer' className="text-blue-600">| Portfolio</a></span>
            </p>
            <p className="mt-2 text-center">
              Junior software developer skilled in JavaScript, React, CSS, MongoDB, and Node.js, with experience in Agile methodologies and SDLC.
              Completed projects including a learning management app and personal portfolio site, utilizing Git, React-Router, and TailwindCSS.
              Former Support Technician with expertise in system administration, technical troubleshooting, and team collaboration.
            </p>
            <div className="border-b-2 border-primary w-full mt-2"></div>
            <p className="flex place-self-start">
              Skills & Competencies
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Languages: 
              <span className="font-normal">Javascript, React, CSS, MongoDB, Node.JS, Express, REST / JSON, HTML</span>
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Tools: 
              <span className="font-normal">BootStrap, ReactStrap, React-Router-DOM, Postman, Git, JWT / SSO, Trello, TailwindCSS, DaisyUI</span>
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Competencies: 
              <span className="font-normal">Software Development Life Cycle / SDLC, Agile, SCRUM, APIs, Debugging, Leadership, Customer Care</span>
            </p>
            <div className="border-b-2 border-primary w-full"></div>
            <p className="flex place-self-start text-lg">Technical Projects</p>
            <p className="text-sm">
              <span><a href="https://github.com/marck-bash/7BrewCoffee" rel='noopener noreferrer' className="text-blue-600">7 Brew Coffee Application </a></span>
              <span> | Web-based learning management application with admin and management created user accounts.</span>
            </p>
            <p className="text-sm place-self-start">
            ● Applied knowledge in the MERN tech stack to create a browser based solution to an employee study and testing application
            which allowed managers to track their employee’s progress and know when they are ready to work.
            </p>
            <p className="text-sm place-self-start">
            ● Initiated a Github repository and maintained version control using Git Commands
            </p>
            <p className="text-sm place-self-start">
            ● Utilized SCRUM methodologies as well as weekly sprints in order to efficiently plan and complete the project
            </p>
            <p className="text-sm place-self-start">
            ● Worked with a team of three other developers to bring the application to life
            </p>
            <p className="text-sm place-self-start">
            ● Stylized front end of application using React, TailwindCSS, and DaisyUI resulting in a responsive and user friendly design
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Highlight Skills: 
              <span className="font-normal">Git | React | Reactstrap | Express | Postman | MongoDB | JavaScript | CSS3 | HTML5 | Node.js | TailwindCSS | DaisyUI</span>
            </p>
            <p className="text-sm mt-2">
              <span><a href="https://marck-bash.github.io/portfolio-project/" rel='noopener noreferrer' className="text-blue-600">Personal Portfolio </a></span>
              <span>  | Website that showcases my skills and projects that utilizes React, React-Router, and TailwindCSS</span>
            </p>
            <p className="text-sm place-self-start">
            ● First personal project since completion of the Upright Education Software Development Bootcamp
            </p>
            <p className="text-sm place-self-start">
            ● Website designed to include information about myself, my projects, my skills, and showcase my design choices
            </p>
            <p className="text-sm place-self-start">
            ● Applied knowledge in React, React-Router, and TailwindCSS to create a stylistic and modern approach to a website
            </p>
            <p className="text-sm place-self-start">
            ● Initiated a Github repository and maintained version control using Git Commands
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Highlight Skills: 
              <span className="font-normal">Javascript | CSS3 | HTML5 | Node.js | Git | React | React-Router | TailwindCSS | DaisyUI</span>
            </p>
            <div className="border-b-2 border-primary w-full mb-2"></div>
            <p className="flex place-self-start text-lg">Professional Experience</p>
            <p className="flex gap-10 text-md">
              Student Developer | Upright Education
              <span>2023 - Present</span>
            </p>
            <p className="place-self-start text-sm">Completed weekly projects during a fully immersive software development course.</p>
            <p className="text-sm place-self-start">
              ●  Created a web-based real-time chat app using React.js for the front end and Node.js with Express.js for the backend, incorporating user
              sign-up/login, multiple chat rooms, and message persistence with MongoDB.
            </p>
            <p className="text-sm place-self-start">
              ● Utilized JWT for secure user authentication and WebSocket for real-time communication, ensuring seamless user interactions and
              dynamic updates in chat rooms
            </p>
            <p className="text-sm place-self-start">
              ● Built an interactive Jeopardy board game using HTML, CSS, and JavaScript, featuring game logic, player score tracking, and user
              interaction capabilities.
            </p>
            <p className="text-sm place-self-start">
              ● Employed Git for version control and focused on optimizing code performance and usability across all projects, ensuring efficient and
              maintainable codebases.
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Highlight Skills: 
              <span className="font-normal">Javascript | Node.js | React | ReactStrap | MySQL | HTML5 | CSS3 | CI/CD | JSON | JWT | MongoDB | TailwindCSS | DaisyUI</span>
            </p>
            <p className="flex gap-10 text-md mt-4">
              Support Technician | Springfield College
              <span>2015 - 2020</span>
            </p>
            <p className="place-self-start text-sm">Springfield College is a top school in New England that focuses on academics, student life, athletics, and community service</p>
            <p className="text-sm place-self-start">
              ● Implemented company policies, technical procedures, and standards for preserving integrity, security of data, and access
            </p>
            <p className="text-sm place-self-start">
              ● Administered Active Directory, Mail Exchange Servers, Office 365, and other related services for the whole campus
            </p>
            <p className="text-sm place-self-start">
              ● Documented new procedures, lead projects, and completed work orders through a ticketing system
            </p>
            <p className="text-sm place-self-start">
              ● Participated in daily SCRUM style standup meetings to discuss workflow and stay up-to-date with what is going on throughout
                campus
            </p>
            <p className="text-sm place-self-start">
              ● Collaborated with diverse groups of technical and non-technical faculty, staff, vendors, and students in order to administer
                solutions to problems that these users may face
            </p>
            <p className="flex place-self-start font-bold text-sm gap-2">
              Highlight Skills: 
              <span className="font-normal">Managing technical documentation | Testing new technologies | Diagnostics | Repairing hardware |
              Upgrading/Deploying software and systems</span>
            </p>
            <div className="border-b-2 border-primary w-full mb-2"></div>
            <p className="flex place-self-start text-lg">Education</p>
            <p className="flex gap-10 text-md mt-2">
              Software Development Certificate | upright Front Range Community College
              <span>2024</span>
            </p>
            <p className="flex gap-10 text-md mt-2 mb-10">
              Bachelors in Computer Science | Software Developement | Springfield College
              <span>2015</span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>  )
}
