import { v4 as uuid } from "uuid";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";
import getLocalStorage from "../utils/getLocalStorage";
import { Link, useLoaderData } from "react-router-dom";
import { infoToast } from "../utils/toast";
import { redirect } from "react-router-dom";

const UserProjects = () => {
  const { projects } = useLoaderData();
  const { role } = getLocalStorage();

  return (
    <>
      <section
        className={`position-relative overflow-hidden ${styles.home} pt-5 pb-5 ps-md-3`}
      >
        <div className="text-center text-md-start">
          <span className="badge rounded-pill text-bg-warning">
            <marquee direction="left" scrollamount="3">
              La 1re plateforme de financement participatif hybride en Guinée
            </marquee>
          </span>
          {role === "entrepreneur" && (
            <>
              <h1 className="text-white mt-3 mb-3">Explorez vos projets</h1>
              <p className="text-white">
                Vous trouverez ici la liste de vos projet quelque soit le status
              </p>
            </>
          )}
          {role === "investor" && (
            <>
              <h1 className="text-white mt-3 mb-3">Explorez nos projets</h1>
              <p className="text-white">
                Vous trouverez ici les projets verifier et pret a etre financer
              </p>
            </>
          )}
        </div>
      </section>
      <section className={`${styles.projects} pt-5 pb-5`}>
        <div className="container-fluid">
          <div className="container">
            <div className="row p-3 bg-white rounded-pill">
              <div className="col-md-6 ">
                <form role="search">
                  <input
                    className="form-control me-2 rounded-pill"
                    type="search"
                    placeholder="🔍  Rechercher un projet..."
                    aria-label="Search"
                  />
                </form>
              </div>

              <div className="col-md-2 text-end">
                <div className="btn-group w-100 ">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary dropdown-toggle rounded-pill"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Type
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Don
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pret
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Equity
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 text-end ">
                <div className="btn-group w-100">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary dropdown-toggle rounded-pill"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Secteur
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Option
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 text-end mb-2 mb-md-0">
                <div className="btn-group w-100 ">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary dropdown-toggle rounded-pill"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Statut
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        En cours
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Objectif atteint
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start mt-3 mb-3">
            {role === "entrepreneur" && (
              <small>
                Vous avez{" "}
                <span className="fw-bold textMainGreen">
                  {projects.length} projet(s)
                </span>{" "}
                sur GUINUTY.
              </small>
            )}
          </div>
          <div className="row">
            {projects.map((project) => (
              <div key={uuid()} className="col-lg-4 mb-3">
                <Link
                  className="text-decoration-none"
                  to={`/dashboard/project/${project._id}`}
                >
                  <ProjectCard {...project} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProjects;
export const loader = async ({ request, params }) => {
  if (!getLocalStorage()) {
    return redirect("/");
  }
  const { token } = getLocalStorage();
  try {
    const response = await fetch(
      `https://guinuty-0aaf959abbbf.herokuapp.com/user/projects`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.clear();
        closeAllOffcanvas();
        errorToast(data);
        return redirect("/");
      }
      errorToast(data);
      return null;
    }
    console.log(data);
    if (data.projects.length === 0) {
      infoToast({ message: "Vous n'avez aucun projet pour le moment." });
      return redirect("/dashboard");
    }

    return data;
  } catch (error) {
    errorToast(error);
    return null;
  }
};
