import Button from "./Button";
import { Link } from "react-router-dom";
import getLocalStorage from "../utils/getLocalStorage";

const UserOffcanvasItems = () => {
  const { role } = getLocalStorage();
  return (
    <>
      <Link to="/dashboard">
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
      <hr />
      <Link to="projects">
        <Button
          width="100"
          tPosition="start"
          color="outline-success"
          border="border-0"
          rounded="rounded-0"
          fWeight="bold"
        >
          <span className="bg-white p-1 rounded">📑</span> Projets
        </Button>
      </Link>
      <Link to="project/add">
        <Button
          width="100"
          tPosition="start"
          color="outline-success"
          border="border-0"
          rounded="rounded-0"
          fWeight="bold"
        >
          <span className="bg-white p-1 rounded">📝</span> Ajouter un projet
        </Button>
      </Link>
      <hr />
      {role === "administrator" ? (
        <Link to="users">
          <Button
            width="100"
            tPosition="start"
            color="outline-success"
            border="border-0"
            rounded="rounded-0"
            fWeight="bold"
          >
            <span className="bg-white p-1 rounded">🪪</span> Utilisateurs
          </Button>
        </Link>
      ) : (
        <>
          <Link to="investments">
            <Button
              width="100"
              tPosition="start"
              color="outline-success"
              border="border-0"
              rounded="rounded-0"
              fWeight="bold"
            >
              <span className="bg-white p-1 rounded">💰</span> Investissements
            </Button>
          </Link>
          <Link to="refund">
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
          <Link to="progress"></Link>
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
export default UserOffcanvasItems;
