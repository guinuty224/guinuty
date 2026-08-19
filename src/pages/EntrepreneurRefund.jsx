import Button from "../components/Button";
import styles from "./EntrepreneurRefund.module.css";
import MetricCard from "../components/MetricCard";
const EntrepreneurRefund = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Remboursements</h1>
        <p>Ici, vous pouvez effectuer vos remboursements.</p>
        <hr />
        <div className="row">
          <div className="col-lg-4">
            <MetricCard
              value={"14.000.000 GNF"}
              description="Total rembourse"
              mBottom={3}
              textAlign="start"
              fSize={true}
              fColor="success"
              bgImage="reimbursements"
            />
          </div>
          <div className="col-lg-4">
            <MetricCard
              value={"500.000 GNF"}
              description="En attente"
              mBottom={3}
              textAlign="start"
              fSize={true}
              fColor="warning"
              bgImage="pendingRefund"
            />
          </div>
          <div className="col-lg-4">
            <MetricCard
              value={"100 %"}
              description="Taux de realisation"
              mBottom={3}
              textAlign="start"
              fSize={true}
              fColor="success"
              bgImage="investors"
            />
          </div>
        </div>
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
                    <span className="fw-bold textMainGreen">🚦 Status</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📅 Echeance</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🧾 Montant</span>
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
                  <td>
                    {" "}
                    <span class="badge rounded-pill text-bg-warning">
                      En attente
                    </span>
                  </td>
                  <td>
                    <span class="badge rounded-pill text-bg-success">
                      29-08-2030
                    </span>
                  </td>
                  <td>500.000 GNF</td>
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
                            👁️ Proceder au paiement
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            ✏️ Demander un report
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
export default EntrepreneurRefund;
