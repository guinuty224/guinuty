import MetricCard from "../components/MetricCard";
import ProjectCard from "../components/ProjectCard";
import { formatCompactNumber } from "../utils/formaters";
import styles from "./EntrepreneurDashboard.module.css";
import Button from "../components/Button";

const EntrepreneurDashboard = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Vue d'ensemble</h1>
        <p>Bienvenue Mamadou.K</p>
        <hr />
        <p className="fw-bold bg-light p-2 rounded">
          Voici l'etat de ton dernier projet
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <ProjectCard
                {...{
                  category: "Éducation",
                  title: "École Les Champions",
                  smallDesc:
                    "Agrandissement des salles de classe d'un établissement franco-guinéen de référence.",
                  collected: 744000000,
                  goal: 1200000000,
                  duration: 32,
                  efficiency: 31,
                }}
              />
            </div>
            <div className="col-lg-6">
              <MetricCard
                value={14}
                description="Investisseurs"
                mBottom={3}
                textAlign="start"
                fSize={true}
                fColor="success"
                bgImage="investors"
              />
              <MetricCard
                value={744000000 + " GNF"}
                description="Montant leve"
                mBottom={3}
                textAlign="start"
                fSize={true}
                fColor="warning"
                bgImage="fund"
              />
              <MetricCard
                value={"15 mai 2026"}
                description="Prochaine echeance"
                textAlign="start"
                fSize={true}
                bgImage="reimbursements"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurDashboard;
