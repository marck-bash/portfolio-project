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
    path: '/',
    element: <App />,
  },
  // Add more page routes below
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/skills',
    element: <Skills />
  },
  {
    path: '/workhistory',
    element: <WorkHistory />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/interests',
    element: <Interests />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
