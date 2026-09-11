import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const EntrepreneurOffcanvasItems = ({ role }) => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/user">
        <Button
          width="100"
          tPosition="start"
          color="outline-success"
          border="border-0"
          rounded="rounded-0"
          fWeight="bold"
        >
          <span className="bg-white p-1 rounded">📊</span> Vue d'ensemble
        </Button>
      </Link>
      <Link to="projects">
        <Button
          width="100"
          tPosition="start"
          color="outline-success"
          border="border-0"
          rounded="rounded-0"
          fWeight="bold"
        >
          <span className="bg-white p-1 rounded">🗄️</span> Projets
        </Button>
      </Link>
      <Link>
        <Button
          width="100"
          tPosition="start"
          color="outline-success"
          border="border-0"
          rounded="rounded-0"
          fWeight="bold"
        >
          <span className="bg-white p-1 rounded">💰</span>
          {role === "investor" || role === "administrator"
            ? " Investissements"
            : " Investisseurs"}
        </Button>
      </Link>
      {role === "administrator" ? (
        <Link>
          <Button
            width="100"
            tPosition="start"
            color="outline-success"
            border="border-0"
            rounded="rounded-0"
            fWeight="bold"
          >
            <span className="bg-white p-1 rounded">🧾</span> Utilisateurs
          </Button>
        </Link>
      ) : (
        <>
          <Link>
            <Button
              width="100"
              tPosition="start"
              color="outline-success"
              border="border-0"
              rounded="rounded-0"
              fWeight="bold"
            >
              <span className="bg-white p-1 rounded">🧾</span> Remboursements
            </Button>
          </Link>
          <Button
            width="100"
            tPosition="start"
            color="outline-success"
            border="border-0"
            rounded="rounded-0"
            fWeight="bold"
          >
            <span className="bg-white p-1 rounded">📝</span> Mises a jour
          </Button>
        </>
      )}
    </>
  );
};
export default EntrepreneurOffcanvasItems;
