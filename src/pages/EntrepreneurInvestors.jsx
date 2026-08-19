import Button from "../components/Button";
import styles from "./EntrepreneurRefund.module.css";
import MetricCard from "../components/MetricCard";
const EntrepreneurInvestors = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Investisseurs</h1>
        <p>Ici, vous pouvez voir vos investisseurs.</p>
        <hr />

        <div className="container bg-light p-3 rounded border">
          <div class="table-responsive">
            <table class="table">
              <thead className="">
                <tr>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🏷️ #ID</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">
                      👤 Nom et prenom
                    </span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">
                      🧾 Investissements
                    </span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📋 Projets</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Salia Camara</td>
                  <td>
                    {" "}
                    <span class="badge rounded-pill text-bg-success">
                      10.000.000 GNF
                    </span>
                  </td>

                  <td>
                    {" "}
                    <div class="dropdown">
                      <Button
                        width={100}
                        tPosition="start"
                        color={"outline-success"}
                        border={0}
                        rounded={0}
                        fWeight="bold"
                        pStart={2}
                        pEnd={2}
                        pBottom={2}
                        pTop={2}
                        dropdown
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Liste
                      </Button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Projet 1 - 5.000.000 GNF
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Projet 2 - 5.000.000 GNF
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurInvestors;
