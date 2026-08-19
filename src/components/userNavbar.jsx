import { useState } from "react";
import { handleMenuClick } from "../utils/clickHandlers";
import Button from "./Button";
const UserNavbar = ({ investor }) => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <nav class="navbar bg-body-tertiary sticky-top navbar-expand-md">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          GUINUTY
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#userOffcanvasNavbar"
          aria-controls="userOffcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="userOffcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Mamadou.K
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <>
              <Button
                width={100}
                tPosition="start"
                color={activeButton === 0 ? "success" : "outline-success"}
                border={0}
                rounded={0}
                fWeight="bold"
                pStart={2}
                pEnd={2}
                pBottom={2}
                pTop={2}
                onClick={(e) => {
                  setActiveButton(0);
                }}
                type="button"
                style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
              >
                <span className="bg-white p-1 rounded">📊</span> Dashboard
              </Button>
              <Button
                width={100}
                tPosition="start"
                color={activeButton === 1 ? "success" : "outline-success"}
                border={0}
                rounded={0}
                fWeight="bold"
                pStart={2}
                pEnd={2}
                pBottom={2}
                pTop={2}
                onClick={(e) => {
                  setActiveButton(1);
                }}
                type="button"
                style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
              >
                <span className="bg-white p-1 rounded">🗄️</span> Projets
              </Button>
              <Button
                width={100}
                tPosition="start"
                color={activeButton === 2 ? "success" : "outline-success"}
                border={0}
                rounded={0}
                fWeight="bold"
                pStart={2}
                pEnd={2}
                pBottom={2}
                pTop={2}
                onClick={(e) => {
                  setActiveButton(2);
                }}
                type="button"
                style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
              >
                <span className="bg-white p-1 rounded">💰</span>
                {investor ? "Investissements" : "Investisseurs"}
              </Button>
              <Button
                width={100}
                tPosition="start"
                color={activeButton === 3 ? "success" : "outline-success"}
                border={0}
                rounded={0}
                fWeight="bold"
                pStart={2}
                pEnd={2}
                pBottom={2}
                pTop={2}
                onClick={(e) => {
                  setActiveButton(3);
                }}
                type="button"
                style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
              >
                <span className="bg-white p-1 rounded">🧾</span> Paiements
              </Button>
              <Button
                width={100}
                tPosition="start"
                color={activeButton === 4 ? "success" : "outline-success"}
                border={0}
                rounded={0}
                fWeight="bold"
                pStart={2}
                pEnd={2}
                pBottom={2}
                pTop={2}
                onClick={(e) => {
                  setActiveButton(4);
                }}
                type="button"
                style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
              >
                <span className="bg-white p-1 rounded">📝</span> Mises a jour
              </Button>
              <div class="dropdown">
                <Button
                  width={100}
                  tPosition="start"
                  color={activeButton === 5 ? "success" : "outline-success"}
                  border={0}
                  rounded={0}
                  fWeight="bold"
                  pStart={2}
                  pEnd={2}
                  pBottom={2}
                  pTop={2}
                  onClick={(e) => {
                    setActiveButton(5);
                  }}
                  dropdown
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
                >
                  <span className="bg-white p-1 rounded">👤</span> Profil
                </Button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Informations personelles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Securite
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Documents KYC
                    </a>
                  </li>
                </ul>
              </div>

              <hr />
              <Button
                width={100}
                tPosition="start"
                color="outline-danger"
                border={0}
                rounded={0}
                fWeight="bold"
                pStart={2}
                pEnd={2}
                pBottom={2}
                pTop={2}
                onClick={(e) => {
                  setActiveButton(6);
                }}
                type="button"
                style={{ fontSize: "clamp(14px, 1.8vw, 1rem)" }}
              >
                <span className="bg-white p-1 rounded">🚪</span> Déconnexion
              </Button>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default UserNavbar;
