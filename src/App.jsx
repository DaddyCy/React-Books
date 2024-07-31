import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import BookDetails from './Components/BookDetails';
import NotFound from './Components/NotFound';

import { Container, Button} from 'react-bootstrap';

import { useState } from 'react';
import { ThemeContext, AuthContext } from './modules/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';

function App() {

    const [search,setSearch] = useState("");// campo di ricerca
    const handleSearch = (e) => setSearch(e.target.value);//metodo di ricerca
    
    let [theme,setTheme] = useState('dark');// stato tema
    let [user,setUser] = useState('Fred Flinstone')//log utenti
  
  return (
  <>

    <ThemeContext.Provider value={[theme,setTheme]}> 
      <AuthContext.Provider value = {[user]}>
        <BrowserRouter> 
          < MyNav search={search} handleSearch={handleSearch} />
          <Container className='my-3'>      
              < Welcome/>
              <Routes>
                <Route index element={<AllTheBooks  books={fantasy} search={search} />} /> 
                <Route path='/details/:asin' element={<BookDetails />} /> 
                <Route path='*' element={<NotFound />} /> 
              </Routes>
                         
  
          </Container> 
          < MyFooter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>  
  </> 
);
}
      

export default App
