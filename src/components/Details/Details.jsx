import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./Details.css";

function Details() {
  // gets movie id from parameters
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  // uses getDetails saga and id from params to get all the details for the selected book
  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS", payload: { id: id } });
  }, []);

  // gets movie details from store
  const currentMovie = useSelector((store) => store.details[0]);

  //navigates user back to '/'s
  const backToHome = () => {
    history.push("/");
  };

  return currentMovie ? (
    <>
      <h1>{currentMovie.title}</h1>
      <div className="detailsPage">
        <img className="poster detail" src={currentMovie.poster} />
        <div className="detailsBox">
          <table className="genreList">
            <thead>
              <tr>
                <th>Genres:</th>
              </tr>
            </thead>
            <tbody>
              {currentMovie.genre.map((genre, i) => {
                return (
                  <tr>
                    <td key={i}></td>
                    {genre}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <p className="description">{currentMovie.description}</p>
          <br />
          <button onClick={() => backToHome()}>Back to home</button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default Details;
