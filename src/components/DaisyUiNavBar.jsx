import React from 'react'
import smallCircularPortrait from '../assets/MarckHeadShotRound256(2).png'
import Switcher from './Switcher'

export default function DaisyUiNavBar() {
  return (
    <div className="navbar bg-transparent">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Interests</a></li>
                    <li><a>Work History</a></li>
                </ul>
            </div>
            <figure>
                <a className="btn btn-ghost btn-circle">
                    <img src={smallCircularPortrait} alt='Home' />
                </a>
            </figure>
        </div>
        <div className="navbar-center hidden lg:flex bg-transparent">
            <ul className="menu menu-horizontal px-4 border bg-base-100 rounded-full shadow-lg">
                <li><a className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">About</a></li>
                <li><a className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Projects</a></li>
                <li><a className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Interests</a></li>
                <li><a className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Work History</a></li>
                <li><a className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Contact Me</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Switcher />
        </div>
    </div>
  )
}
