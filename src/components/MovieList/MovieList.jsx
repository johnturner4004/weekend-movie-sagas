import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

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
            <div onClick={() => handleClick(movie.id)} id={movie.id} key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
