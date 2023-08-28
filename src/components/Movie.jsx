/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Movie = ({movie}) => {
  return (
    <div>
      <img src={movie.Poster} />
      {movie.Title} - {movie.Year}
    </div>
  );
};

export default Movie;
