//Changed state name from active tab to active link, outsourced the click handler function as modular utilities function, removed projet link
import Button from "./Button";
import { useState } from "react";
import { createPortal } from "react-dom";
import { handleMenuClick } from "../utils/clickHandlers";
import Offcanvas from "./Offcanvas";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import EntrepreneurOffcanvasItems from "./EntrepreneurOffcanvasItems";
const Navbar = ({ activeLink }) => {
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
              <a
                className={`nav-link ${activeLink == 0 && "active"}`}
                aria-current="page"
                href="#"
              >
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink == 1 && "active"}`} href="#">
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink == 2 && "active"}`} href="#">
                Comment ca marche
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink == 3 && "active"}`} href="#">
                A propos
              </a>
            </li>
          </ul>

          <>
            <Button
              color="outline-dark"
              pStart={3}
              pEnd={3}
              pTop={2}
              pBottom={2}
              mEnd={2}
              offcanvasId="offcanvasSignIn"
            >
              Connexion
            </Button>
            <Offcanvas id="offcanvasSignIn" title="➡️ Connexion">
              <SignInForm />
            </Offcanvas>
            <Button
              color="success"
              pStart={3}
              pEnd={3}
              pTop={2}
              pBottom={2}
              offcanvasId="offcanvasSignUp"
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
