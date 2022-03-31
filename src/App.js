import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS"
      isLargeRow={true}
      fetchUrl={requests.fetchNetflixOriginals } />
      <Row title="Trending now" fetchUrl={requests.fetchTrending } />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated } />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies } />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies } />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries } />
    </div>
    
  );
}

export default App;
