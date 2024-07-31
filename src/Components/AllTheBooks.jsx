import React, { useState } from 'react'
import {  Col, Row} from 'react-bootstrap';
import SingleBook from './SingleBook';



export default function AllTheBooks(props) {
//  console.log(props.books);
const [selected, setSelected] = useState(false);   

 

return (

  <>
      
         <Col>
          <Row>
              {props.books
              //.slice(0,20) metodo per far apparire solo il numero inserito(20) di libri 
              .filter(book => book.title.toLowerCase().includes(props.search))
              .map(book => <SingleBook  
                              key={book.asin} 
                              book={book}
                              selected={selected}  
                              setSelected={setSelected}         
                            />)}
          </Row>
        </Col>
</>
  )
}
             