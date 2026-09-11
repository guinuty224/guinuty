import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import EntrepreneurOffcanvasItems from "./EntrepreneurOffcanvasItems";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UserNavbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();
  const role = userData.role;

  return (
    <nav class="navbar bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          GUINUTY
        </a>
        <Button offcanvasId="userOffcanvasNavbar" type="button">
          ☰ MENU
        </Button>
        <Offcanvas title="USERNAME" id="userOffcanvasNavbar">
          <EntrepreneurOffcanvasItems role={role} />
          <hr />
          <Link to="settings">
            <Button
              width="100"
              tPosition="start"
              color="outline-success"
              border="border-0"
              rounded="rounded-0"
              fWeight="bold"
            >
              <span className="bg-white p-1 rounded">👤</span> Informations
              personelles
            </Button>
          </Link>
          <Link to="settings/security">
            <Button
              width="100"
              tPosition="start"
              color="outline-success"
              border="border-0"
              rounded="rounded-0"
              fWeight="bold"
            >
              <span className="bg-white p-1 rounded">🔐</span> Securite
            </Button>
          </Link>
          <Link to="settings/notifications">
            <Button
              width="100"
              tPosition="start"
              color="outline-success"
              border="border-0"
              rounded="rounded-0"
              fWeight="bold"
            >
              <span className="bg-white p-1 rounded">🔔</span> Notifications
            </Button>
          </Link>
          {role === "administrator" && (
            <Link to="users">
              <Button
                width="100"
                tPosition="start"
                color="outline-success"
                border="border-0"
                rounded="rounded-0"
                fWeight="bold"
              >
                <span className="bg-white p-1 rounded">🪪</span> Liste des
                utilisateurs
              </Button>
            </Link>
          )}
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
            type="button"
            onClick={() => {
              localStorage.clear();
              Swal.fire({
                title: "Déconnexion",
                text: "Vous avez été déconnecté avec succès. À bientôt !",
                icon: "info",
                toast: true,
                position: "bottom-end",
                timer: 10000,
                timerProgressBar: true,
                showConfirmButton: false,
              });
              navigate("/");
            }}
          >
            <span className="bg-white p-1 rounded">🚪</span> Déconnexion
          </Button>{" "}
        </Offcanvas>
      </div>
    </nav>
  );
};
export default UserNavbar;
