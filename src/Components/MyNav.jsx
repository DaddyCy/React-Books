import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import SearchBook from './SearchBook';
import { AuthContext, ThemeContext } from '../modules/Context'
import { Link } from 'react-router-dom';



export default function MyNav({search,handleSearch}) {
  
  let [updateContext,setUpdateContext] = useContext(ThemeContext);//si prendono i dati dal Context in App
  let [userContext,setUserContext] = useContext(AuthContext);

  return (
    <>
      <Navbar bg={updateContext} data-bs-theme={updateContext} >
        <Container>
          <Link className='nav-link'>
              <Navbar.Brand to="/">HOPE BOOKS</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/">About</Link>
            <Link className='nav-link' to="/">Browse</Link>
          </Nav>
          <SearchBook search={search} handleSearch={handleSearch} />
          <Navbar.Text className='me-3'>
            Signed in as: <a href="#login">{userContext}</a>
          </Navbar.Text>
          <Button variant="light" onClick={() =>{
            updateContext === 'light' ? setUpdateContext('dark') : setUpdateContext('light')}}> 
            Cambio tema 
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

