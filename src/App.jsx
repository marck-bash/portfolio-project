import React from 'react'
import NavBar from "./components/NavBar";
import headshot_shrunk from './assets/MarckHeadshot256px.jpeg'
import DaisyUiNavBar from "./components/DaisyUiNavBar";

function App() {
  return (
    <div className="w-screen bg-hero-pattern h-screen flex flex-col items-center">
      <div className="flex flex-col bg-base-300 w-3/4 h-screen">
        <div className="flex flex-col">
          <nav>
            <DaisyUiNavBar />
          </nav>
          <figure>
            <img src={headshot_shrunk} alt='headshot' />
          </figure>
          <h1>Personal Portfolio</h1>
          <p>Say something about yourself here!</p>
          <figure>
            <picture>
              {/* <souce srcset="https://www.fillmurray.com/g/300/400" />
              <img src="https://www.fillmurray.com/g/300/400" />" */}
            </picture>
            <figcaption>
              {/* Source: <a href="https://www.fillmurray.com/">www.fillmurray.com/</a> */}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default App;
