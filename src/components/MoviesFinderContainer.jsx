import { useState, useEffect } from 'react';

import Movie from './Movie';

const MoviesFinderContainer = () => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);

  const titleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=7da6b168&s=${title}`)
      .then((res) => res.json())
      .then((resmovies) => {
        if (resmovies.Search) {
          setMovies(resmovies.Search);
        }
      });
  }, [title]);

  return (
    <div>
      <h1>Movie finder</h1>
      <label htmlFor="title">Título</label>
      <input id="title" onChange={titleOnChangeHandler} value={title} />
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MoviesFinderContainer;
