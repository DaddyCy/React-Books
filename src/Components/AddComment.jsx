import { React, useState } from 'react'
import {  Button, Form } from 'react-bootstrap'
import axios from '../AxiosApi/AxiosApi';


export default function AddComment({elementId,setUpdateReviews,updateReviews}) {
  
  const[objComment,setObjComment]= useState({ comment: '', rate: 0, elementId: elementId})
 
  let setCommentHandler = (e) =>{
    setObjComment({
      ...objComment, // con lo spread operator permette di prendere solo i valori contenuti nell'oggetto,in questo caso prende solo il valore di comment e lo sovrascrive
      comment: e.target.value,
      elementId: elementId
    })
  }
  
  let setRateHandler = (e) =>{
    setObjComment({
      ...objComment,
      rate: e.target.value,
      elementId: elementId,
    })
  }
  
  
  let sendObjComment =() =>{

  axios.post('/comments/',objComment)
    .then((response) => {
      setUpdateReviews(!updateReviews)
      setObjComment({comment: '', rate: 0, elementId: elementId})
    })
    .catch((error) => console.error(error))
}
  return (
    <Form>
      <Form.Group className="mt-5">
        <Form.Control 
        type="email" 
        placeholder="Scrivi una recensione" 
        onChange={setCommentHandler}
        />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Select aria-label="Default select example" onChange={setRateHandler}>
          <option>Valuta il libro</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="outline-primary" onClick={sendObjComment}>Conferma la recensione</Button>
      </Form.Group>
    </Form>
  )
}

