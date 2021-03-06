import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector(store => store.movies);

  // runs fetchAllMovies on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  // sends user to details page for selected movie. movie id sent through parameters
  const handleClick = (id) => {
    console.log("click", id);
    history.push(`/details/${id}`);
  };

  return (
    <main>
      <h1>MovieList</h1>
      <button onClick={() => history.push('/add-movie')}>Add Movie</button>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div className="movieFrame" onClick={() => handleClick(movie.id)} id={movie.id} key={movie.id}>
              <h2>{movie.title}</h2>
              <img className="poster" src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
