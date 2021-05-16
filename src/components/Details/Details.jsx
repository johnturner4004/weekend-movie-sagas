import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function Details() {

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch({ type:'FETCH_DETAILS', payload: {id: id} })
}, []);
  const currentMovie = useSelector(store => store.details[0]);
  
  const history = useHistory();
  
  console.log(currentMovie);

  const backToHome = () => {
    console.log('click');
    history.push('/');
  }

  return(
    currentMovie ?
    <>
      <h1>{currentMovie.title}</h1>
      <img src={currentMovie.poster} />
      <p>{currentMovie.description}</p>
      <button onClick={() => backToHome()}>Back to home</button>
      </>
  : '')
}

export default Details;