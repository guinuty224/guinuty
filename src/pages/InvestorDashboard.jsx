import MetricCard from "../components/MetricCard";
import ProjectCard from "../components/ProjectCard";
import { formatCompactNumber } from "../utils/formaters";
import styles from "./InvestorDashboard.module.css";
import Button from "../components/Button";

const InvestorDashboard = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Vue d'ensemble</h1>
        <p>Bienvenue Salia Camara</p>
        <hr />
        <p className="fw-bold bg-light p-2 rounded">
          Voici vos recents investissements
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className=" bg-light p-3 rounded border">
                <div class="table-responsive">
                  <table class="table">
                    <thead className="">
                      <tr>
                        <th scope="col">
                          <span className="fw-bold textMainGreen">🏷️ #ID</span>
                        </th>
                        <th scope="col">
                          <span className="fw-bold textMainGreen">
                            📋 Projet
                          </span>
                        </th>
                        <th scope="col">
                          <span className="fw-bold textMainGreen">
                            💼 Secteur
                          </span>
                        </th>
                        <th scope="col">
                          <span className="fw-bold textMainGreen">
                            🧾 Investissements
                          </span>
                        </th>
                        <th scope="col">
                          <span className="fw-bold textMainGreen">
                            📈 Rendement
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr>
                        <th scope="row">1</th>
                        <td>Projet 1</td>
                        <td> Education</td>
                        <td>
                          {" "}
                          <span class="badge rounded-pill text-bg-success">
                            10.000.000 GNF
                          </span>
                        </td>
                        <td>
                          {" "}
                          <span class="badge rounded-pill text-bg-warning">
                            14%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <MetricCard
                value={"38.000.000 GNF"}
                description="Total investi"
                mBottom={3}
                textAlign="start"
                fSize={true}
                fColor="success"
                bgImage="investors"
              />
              <MetricCard
                value={"5.460.000" + " GNF"}
                description="Rendement attendu"
                mBottom={3}
                textAlign="start"
                fSize={true}
                bgImage="fund"
              />
              <MetricCard
                value={"2.100.000 GNF"}
                description="Prochaine echeance dans x jours"
                textAlign="start"
                fSize={true}
                fColor="warning"
                bgImage="pendingRefund"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InvestorDashboard;
