import Button from "./Button";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import UserOffcanvasItems from "./UserOffcanvasItems";
import Swal from "sweetalert2";
const UserNavbar = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GUINUTY
        </a>
        <Button offcanvasId="userOffcanvasNavbar" type="button">
          ☰ MENU
        </Button>
        <Offcanvas title="USERNAME" id="userOffcanvasNavbar">
          <UserOffcanvasItems />
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
              personelles{" "}
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
          <hr />
          <Button
            width="100"
            tPosition="start"
            color="outline-danger"
            rounded="rounded-0"
            fWeight="bold"
            padding="p-2"
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
          </Button>
        </Offcanvas>
      </div>
    </nav>
  );
};
export default UserNavbar;
