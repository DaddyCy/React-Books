import App from '../App'
import { render, screen,fireEvent} from "@testing-library/react";


    describe('test HomePage', () => {

        it("verifica del componente SingleBook", () => {
          render(<App/>);
          const bookCard = screen.getAllByTestId('bookCard');
          expect(bookCard).toHaveLength(150);
          });
    
  
        it('ricerca di libri tramite il campo nella navbar', async () => {
        render(<App />);
        const searchBook = screen.getByPlaceholderText(/Search for the best books/i)
        fireEvent.change(searchBook, { target : { value: 'conan' }});
        const allTheBooksCards = await screen.findAllByTestId('bookCard');
        expect(allTheBooksCards).toHaveLength(2)
        })
        
        it('cambio colore bordo', () => {
          render(<App />);
          const allTheBooksCards = screen.getAllByTestId('bookCard');
          const firstBookCard = allTheBooksCards[0];
          fireEvent.click(firstBookCard);
          expect(firstBookCard).toHaveStyle('border: 2px solid red');
        })
      
        // Test 6
        it('reset cambio colore bordo', () => {
          render(<App />);
          const allTheBooksCards = screen.getAllByTestId('bookCard');
          const firstBookCard = allTheBooksCards[0];
          fireEvent.click(firstBookCard);
          expect(firstBookCard).toHaveStyle('border: 2px solid red');
          const secondBookCard = allTheBooksCards[1];
          fireEvent.click(secondBookCard);
          expect(firstBookCard).not.toHaveStyle('border: 2px solid red');
        })
      
        // Test 7
        it('Comment test', () => {
          render(<App />);
          const allTheBooksComment = screen.queryAllByTestId('singleComment');
          expect(allTheBooksComment).toHaveLength(0)
        })
      })
      
      
      
      