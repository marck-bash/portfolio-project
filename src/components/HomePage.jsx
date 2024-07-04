import React from 'react'
import headshotShrunk from '../assets/MarckHeadshot256px.jpeg'

export default function HomePage() {
  return (
    <>
        <div className='flex'>
            <figure>
            <img src={headshotShrunk} alt='headshot' className='rounded-lg mx-24' />
            </figure>
            <div className='flex flex-col'>
                <div className='text-4xl text-primary font-bold font-serif flex flex-wrap mx-36 w-3/4'>Full Stack Developer looking for work in web development.</div>
                <p className='flex flex-wrap mx-36 mt-12 w-3/4'>Currently working as a Full Stack Developer with Upright Education.  Recently finished a Tech Boot Camp specializing in the MERN tech stack. I have a background in Technical Support from my years working at Springfield College. I am looking to utilize my skills as a Full Stack Developer in a full-time capacity</p>
            </div>
        </div>
        <ul className='ml-24 w-1/6'>
        {/* this is where social media links will be placed (linkedin, github, ) */}
        <li className='mt-4'>
            <a className='fa fa-facebook bg-primary text-lg w-8 h-8 p-0.5' />
        </li>
        </ul>
    </>
  )
}
