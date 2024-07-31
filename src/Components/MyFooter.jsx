import { Link } from "react-router-dom";


export default function MyFooter() {
  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>
          <ul className="nav col-md-4 justify-content-end">
            <Link className="nav-item nav-link px-2 text-body-secondary" to="/">Home</Link>
            <Link className="nav-item nav-link px-2 text-body-secondary" to="/">About</Link>
            <Link className="nav-item nav-link px-2 text-body-secondary" to="/">Browse</Link>
          </ul>
        </footer>
  </div>
  );
}
