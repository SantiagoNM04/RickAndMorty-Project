import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = ({itemMenu}) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg p-5 mb-5">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Rick & Morty
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i className="toggler bi bi-list fs-1"></i></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-lg-end justify-content-md-start mt-4"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link to="/characters"
                  className={itemMenu === "Characters" ? "active text-decoration-none p-2 rounded-2" : "inactive text-decoration-none p-2 rounded-2"}
                  aria-current="page"
                  href="#"
                >
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" 
                  className={itemMenu === "Contact" ? "active text-decoration-none p-2 rounded-2" : "inactive text-decoration-none p-2 rounded-2"}
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
