import { v4 as uuid } from "uuid";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import styles from "./Projects.module.css";
import { projects } from "../utils/dummyDatas";
import { useState } from "react";
import { handleMenuClick } from "../utils/clickHandlers";

const Projects = () => {
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
          <h1 className="text-white mt-3 mb-3">
            Explorez les projets à financer
          </h1>

          <p className="text-white">
            Choisissez un projet, investissez à partir de 5 000 000 GNF et
            suivez votre rendement.
          </p>
        </div>
        <div id="greenCircle" className="rounded-circle "></div>
        <div id="yellowCircle" className="rounded-circle"></div>
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
            <small>
              <span className="fw-bold textMainGreen">6 projets</span>{" "}
              disponibles.
            </small>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div key={uuid()} className="col-lg-4 mb-3">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
