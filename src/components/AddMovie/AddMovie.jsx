import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

  const dispatch = useDispatch();
  const history = useHistory()

  //triggers fetchAllGenres to get genre list from database and store it in a reducer
  function getGenres() {
    dispatch({type: 'FETCH_GENRES'});
  }

  // runs getGenres once on page load
  useEffect(() => {
    getGenres()
  }, []);

  // retrieve genres list from reducer and set up hooks necessary for the select menu
  const genres = useSelector(store => store.genres);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState('');
  const [genre, setGenre] = useState('');

  // clears input fields
  function clearInput() {
    setTitle('');
    setUrl('');
    setDetails('');
    setGenre('');
  }

  // puts data for new movie in an object and dispatches to newMovie.saga.js
  function handleClick() {
    let newMovie = {
      title: title,
      poster: url,
      description: details,
      genre_id: Number(genre)
    }
    clearInput();
    dispatch({ type: 'NEW_MOVIE', payload: newMovie});
    history.push('/');
    console.log('click');
  };

  //clears inputs and navigates back to homepage
  function handleCancel() {
    clearInput();
    history.push('/');
  }

  return(
    <>
    <h2>Enter movie details</h2>
    <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title" required />
    <input type="text" id="poster" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="poster url" required /><br />
    <textarea placeholder="movie description" onChange={(event) => setDetails(event.target.value)} rows="4" cols="36" required /><br />
    <select onChange={(event) => setGenre(event.target.value)} required>
        <option disable selected value> -- Select a Genre -- </option>
        {genres.map ((genre) => 
        <option key={genre.id} value={genre.id}>{genre.name}</option>
        )}
    </select><br />
    <button onClick={() => handleClick()}>Add Movie!</button>
    <button onClick={() => handleCancel()}>Cancel</button>
    </>
  )
}

export default AddMovie;