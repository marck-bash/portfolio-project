import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import smallCircularPortrait from '../assets/MarckHeadShotRound256(2).png';
import Switcher from './Switcher';

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
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/workhistory'>Work History</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/interests'>Interests</Link></li>
                </ul>
            </div>
            <figure>
                <Link className="btn btn-ghost btn-circle" to="/" >
                    <img src={smallCircularPortrait} alt='Home' />
                </Link>
            </figure>
        </div>
        <div className="navbar-center hidden lg:flex bg-transparent">
            <ul className="menu menu-horizontal px-4 border bg-base-100 rounded-full shadow-lg">
                <li><NavLink to="/about" className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">About</NavLink></li>
                <li><NavLink to="/skills" className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Skills</NavLink></li>
                <li><NavLink to="/workhistory" className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Work History</NavLink></li>
                <li><NavLink to="/projects" className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Projects</NavLink></li>
                <li><NavLink to="/interests" className="btn-sm bg-base-100 border-base-100 flex rounded-full hover:bg-base-300 hover:border-transparent hover:rounded-full">Interests</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Switcher />
        </div>
    </div>
  )
}
