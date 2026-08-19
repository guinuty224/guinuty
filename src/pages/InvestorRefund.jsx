import Button from "../components/Button";
import styles from "./InvestorRefund.module.css";
import MetricCard from "../components/MetricCard";
const InvestorRefund = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Remboursements</h1>
        <p>Ici, vous pouvez voir vos remboursements a venir.</p>
        <hr />
        <div className="row">
          <div className="col-lg-4">
            <MetricCard
              value={"38.000.000 GNF"}
              description="Total a venir"
              mBottom={3}
              textAlign="start"
              fSize={true}
              fColor="success"
              bgImage="investors"
            />
          </div>
          <div className="col-lg-4">
            <MetricCard
              value={"5.460.000" + " GNF"}
              description="Rendement attendu"
              mBottom={3}
              textAlign="start"
              fSize={true}
              bgImage="fund"
            />
          </div>
          <div className="col-lg-4">
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
                    <span className="fw-bold textMainGreen">🚦 Status</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📅 Echeance</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🧾 Montant</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📈 Rendement</span>
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
                    <span class="badge rounded-pill text-bg-warning">14%</span>
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
export default InvestorRefund;
