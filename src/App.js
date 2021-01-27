import { useEffect, useState } from 'react';

// Components
import Movie from './components/Movie';

// Config
import _config from './config';
// Axios
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchData(api) {
    try {
      const response = await axios.get(api);
      const _movies = response.data.results;

      setMovies(_movies);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData(_config.featuredAPI);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetchData(_config.searchAPI + searchTerm);
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="movies-container">
      <header className="header">
        <form onSubmit={searchHandler}>
          <input
            className="search"
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
}

export default App;
