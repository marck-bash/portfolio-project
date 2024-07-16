import React from 'react';
import headshotShrunk from '../assets/MarckHeadshot256px.jpeg';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/discord';
import 'react-social-icons/email';

export default function HomePage() {
  return (
    <div className="hero bg-base-300 flex-1">  {/* set outter div (found on app.jsx) to min-h-screen, and inner div to flex-1 */}
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
                src={headshotShrunk}
                className="max-w-sm rounded-lg shadow-2xl place-self-start" />
            <div>
                <div className="text-5xl font-bold flex justify-center border-y-4 border-secondary py-2">Marck A. Bashaw</div>
                <div className='text-4xl text-primary font-bold font-serif flex flex-wrap w-3/4 pt-4'>
                    Full Stack Developer passionate about solving problems through design and code.
                </div>
                <p className='flex flex-wrap py-6'>
                    Currently working as a Full Stack Developer with Upright Education.  
                    Recently finished a Tech Boot Camp specializing in the MERN tech stack. I have a background in Technical Support 
                    from my years working at Springfield College. I am looking to utilize my skills as a Full Stack Developer in a full-time capacity.</p>
                <ul className="gap-4 hidden sm:flex">
                    <li>
                        <SocialIcon target="_blank" url="https://github.com/marck-bash" style={{ height: 35, width: 35 }} />
                    </li>
                    <li>
                        <SocialIcon target="_blank" url="https://linkedin.com/in/marck-bashaw-90264b2ab" style={{ height: 35, width: 35 }} />
                    </li>
                    <li>
                        <SocialIcon target="_blank" url="https://discord.com/users/585284025397018625" style={{ height: 35, width: 35 }} />
                    </li>
                    <li>
                        <SocialIcon target="_blank" url="mailto:marckbashaw@gmail.com" style={{ height: 35, width: 35 }} />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
