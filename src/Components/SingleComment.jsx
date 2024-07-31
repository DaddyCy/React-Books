import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';

import axios from '../AxiosApi/AxiosApi';
import { StarFill } from 'react-bootstrap-icons';

export default function SingleComment({comment,setUpdateReviews,updateReviews}) {
  
  const removeComment = (comment) =>{

    axios.delete('/comments/' + comment._id)
      .then((response) => {
       setUpdateReviews(!updateReviews); //visualizza il commento all'istante
      })
      .catch(error => console.error(error))
    }
 
 
    return (
    <ListGroupItem  className='my-1' style={{border:'2px solid coral'}} data-testid="singleComment">
        <p className='me-1'>{Array.from({length: comment.rate}).map(rate => <StarFill />)}</p> <p className=''>{comment.comment} </p>
        <Button variant="danger" onClick={() =>removeComment(comment)}>DELETE</Button>
    </ListGroupItem>

  )
}
