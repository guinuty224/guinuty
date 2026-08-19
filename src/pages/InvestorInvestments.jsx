import Button from "../components/Button";
import styles from "./InvestorInvestments.module.css";
import MetricCard from "../components/MetricCard";
const InvestorInvestments = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Investissements</h1>
        <p>Ici, vous pouvez voir vos different investissements.</p>
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
                    <span className="fw-bold textMainGreen">📋 Projet</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">💼 Secteur</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">
                      🧾 Investissements
                    </span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📈 Rendement</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🛠️ Actions</span>
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
                    <span class="badge rounded-pill text-bg-warning">14%</span>
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
                        Menu
                      </Button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            🧾 Telecharger le recu
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            👁️ Voir le projet
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
export default InvestorInvestments;
