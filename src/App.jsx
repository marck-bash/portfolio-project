import React from 'react';
import DaisyUiNavBar from "./components/DaisyUiNavBar";
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="flex flex-col bg-base-300 w-3/4 h-screen">
        <div className="flex flex-col min-h-screen bg-base-300">
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
