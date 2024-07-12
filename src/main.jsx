import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Interests from './components/Interests';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/portfolio-project/',
    element: <App />,
  },
  // Add more page routes below
  {
    path: '/portfolio-project/about',
    element: <About />
  },
  {
    path: '/portfolio-project/skills',
    element: <Skills />
  },
  {
    path: '/portfolio-project/workhistory',
    element: <WorkHistory />
  },
  {
    path: '/portfolio-project/projects',
    element: <Projects />
  },
  {
    path: '/portfolio-project/interests',
    element: <Interests />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
