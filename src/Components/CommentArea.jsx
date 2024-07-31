import  { React, useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';
import { Alert, Spinner } from 'react-bootstrap';

import axios from '../AxiosApi/AxiosApi';


export default function CommentArea({asin}) {
  const[reviews,setReviews] = useState([]);
  const[loading,setLoading] = useState(false);//spinner
  const[error,setError] = useState(false);
  const[updateReviews,setUpdateReviews] = useState(false); // aggiornamento pagina /elevazione di stato


useEffect(() => {
    setLoading(true);
    axios.get('/books/' + asin + '/comments/')
    .then((response) => {
      setReviews(response.data) //non accetta la scritta json come la fetch normale
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
      setLoading(false);
    })
}, [updateReviews,asin])

  return (
    <div>
    {loading && <div className='text-center mt-2'><Spinner className='my-4' animation="grow" /></div>}
    {error && <div className='text-center mt-2'>
                <Alert key={"info"} variant={"info"}> Problemi nel caricamento</Alert></div>}
    <CommentList comments={reviews} setUpdateReviews={setUpdateReviews} updateReviews={updateReviews}/>
    <AddComment elementId={asin} setUpdateReviews={setUpdateReviews} updateReviews={updateReviews}/>
    </div>
  )
}
