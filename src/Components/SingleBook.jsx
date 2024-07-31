import { React,useContext } from 'react';
import { Button, Card, Col} from 'react-bootstrap';

import { ThemeContext } from '../modules/Context'
import { useNavigate } from 'react-router-dom';


export default function SingleBook( {book, selected, setSelected} ) {
  

  let [updateContext,setUpdateContext] = useContext(ThemeContext);
  let navigate = useNavigate();
  
  return (
 
    <Col>
      <Card className='my-3' bg={updateContext} data-bs-theme={updateContext} style={{ width: "18rem", height:'400px', border: selected === book.asin ? "2px solid red" :"none", cursor:"pointer" }} 
      //prende l'asin del book all'onClick
      onClick={() => setSelected(book.asin)}
      data-testid="bookCard">  
        <Card.Img  variant="top" src={book.img} style={{width:'100%', height:'300px'}}/>
          <Card.Body>
            <Card.Title onClick={() => navigate('/details/'+book.asin)}>{book.title}</Card.Title>
           
          </Card.Body> 
      </Card>
      
    </Col>
  );
}
