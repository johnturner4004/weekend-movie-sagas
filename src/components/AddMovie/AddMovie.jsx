import {useState} from 'react'

function AddMovie() {

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
        {/* {
        <option>test1</option>
        } */}
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
// to reducer
//back here

export default AddMovie;