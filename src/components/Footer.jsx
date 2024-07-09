import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/discord';
import 'react-social-icons/email';

export default function Footer() {
  return (
        <footer className="footer footer-center text-base-content z-10 bg-base-300 ">
          <nav className="grid grid-flow-col gap-4">
            <Link to="/about" className="link link-hover hover:text-primary">About</Link>
            <Link to="/skills" className="link link-hover hover:text-primary">Skills</Link>
            <Link to="/workhistory" className="link link-hover hover:text-primary">Work History</Link>
            <Link to="/projects" className="link link-hover hover:text-primary">Projects</Link>
            <Link to="/interests" className="link link-hover hover:text-primary">Interests</Link>
          </nav>
          <ul className="flex gap-4">
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
          <aside>
            <p>Copyright © {new Date().getFullYear()} Marck Bashaw. All right reserved.</p>
          </aside>
        </footer>
  )
}
