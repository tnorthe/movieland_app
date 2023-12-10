import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8d42927f";

const movie1 = {
 
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"

}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value='Superman'
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        />
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
