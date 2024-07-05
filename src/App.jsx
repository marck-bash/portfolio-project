import React from 'react'
import DaisyUiNavBar from "./components/DaisyUiNavBar";
import HomePage from './components/HomePage';
import HeroDaisyUi from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-screen bg-hero-pattern h-screen flex flex-col items-center">
      <div className="flex flex-col bg-base-300 w-3/4 h-screen">
        <div className="flex flex-col">
          <nav>
            <DaisyUiNavBar />
          </nav>
          <HomePage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
