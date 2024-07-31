import { render, screen} from "@testing-library/react";
import Welcome from '../Components/Welcome';



test("verifica del componente Welcome", () => {
    render(<Welcome />);
    const welcomeComponent = screen.getByText(/main page of the books/i);
  
    expect(welcomeComponent).toBeInTheDocument();
});
