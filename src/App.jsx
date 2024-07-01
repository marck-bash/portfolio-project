import NavBar from "./components/NavBar";
import headshot_shrunk from './assets/MarckHeadshot256px.jpeg'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
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
  );
}

export default App;
