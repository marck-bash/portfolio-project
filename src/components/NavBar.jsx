import React from 'react'
import smallCircularPortrait from '../assets/MarckHeadShotRound256(2).png'
import { useEffect } from 'react'
import Switcher from './Switcher'
    
export default function NavBar() {

    
    return (
        <div className='flex'>
            <figure>
                <img src={smallCircularPortrait} alt='Home' />
            </figure>
            <nav>
                <ul className='flex'>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Interests
                    </li>
                    <li>
                        Work History
                    </li>
                    <li>
                        Contact me
                    </li>
                </ul>
            </nav>
            <Switcher />
        </div>
    )
}
