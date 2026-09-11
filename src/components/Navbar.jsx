import Offcanvas from "./Offcanvas";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GUINUTY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="projects"
              >
                Projets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="steps"
              >
                Comment ça marche
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="about"
              >
                À propos
              </NavLink>
            </li>
          </ul>

          <>
            <Button
              color="outline-dark"
              padding={"px-3 py-2"}
              margin={"me-2"}
              offcanvasId="offcanvasSignIn"
              type="button"
            >
              Connexion
            </Button>
            <Offcanvas id="offcanvasSignIn" title="➡️ Connexion">
              <SignInForm />
            </Offcanvas>
            <Button
              color="success"
              padding={"px-3 py-2"}
              offcanvasId="offcanvasSignUp"
              type="button"
            >
              S'inscrire
            </Button>
            <Offcanvas id="offcanvasSignUp" title="➕ S'inscrire">
              <SignUpForm />
            </Offcanvas>{" "}
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
