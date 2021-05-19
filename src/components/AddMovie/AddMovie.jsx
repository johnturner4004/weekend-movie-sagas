import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

  const dispatch = useDispatch();
  const history = useHistory()

  function getGenres() {
    dispatch({type: 'FETCH_GENRES'});
  }

  useEffect(() => {
    getGenres()
  }, []);

  const genres = useSelector(store => store.genres);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState('');
  const [genre, setGenre] = useState('');

  function handleClick() {
    let newMovie = {
      title: title,
      poster: url,
      description: details,
      genre_id: Number(genre)
    }
    dispatch({ type: 'NEW_MOVIE', payload: newMovie});
    history.push('/');
    console.log('click');
  };

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
    </>
  )
}

export default AddMovie;