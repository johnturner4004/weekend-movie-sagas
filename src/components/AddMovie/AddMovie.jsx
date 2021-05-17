import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


function AddMovie() {

  const dispatch = useDispatch();

  function getGenres() {
    dispatch({type: 'FETCH_GENRES'});
  }

  const genres = useSelector(store => store.genres);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState('');

  console.log(details);

  function handleClick() {
    console.log('click');
  };

  return(
    <>
    <h2>Enter movie details</h2>
    <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title" required />
    <input type="text" id="poster" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="poster url" required /><br />
    <textarea placeholder="movie description" onChange={(event) => setDetails(event.target.value)} rows="4" cols="36" required /><br />
    <select required>
      <optgroup>
        <option disable selected value> -- Select a Genre -- </option>
        {genres.map ((genre, i) => {
        <option key={i}>{genre}</option>
        })}
      </optgroup>
    </select><br />
    <button onClick={() => handleClick()}>Add Movie!</button>
    </>
  )
}

//XXXto root saga
//XXXto saga
//XXXto server.js
//XXXto router
//XXXquery
//XXXsaga
//XXto reducer
//back here

export default AddMovie;