//Outsourced data into separste file, removed unnecessary imports
import { v4 as uuid } from "uuid";
import MetricCard from "../components/MetricCard";
import MissionCard from "../components/MissionCard";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import styles from "./Landing.module.css";
import CallToActionSection from "../components/CallToActionSection";
import { homeMetrics, homeMissions, projects } from "../utils/dummyDatas";
const Landing = () => {
  return (
    <>
      <section className={`${styles.home}  textMainGreen`}>
        <div className="container">
          {" "}
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="badge rounded-pill text-bg-warning">
                <marquee direction="left" scrollamount="3">
                  La 1re plateforme de financement participatif hybride en
                  Guinée
                </marquee>
              </span>

              <h1 className="mt-3 mb-3">
                Le <span className="textSecondaryGreen">financement</span>
                <br /> qui réunit capital et{" "}
                <span className="text-warning">ambition</span>
              </h1>

              <p className="">
                GUINUTY connecte les porteurs de projets guinéens, les
                investisseurs locaux et la diaspora autour d'un financement
                transparent, solidaire et rentable.
              </p>
              <div className="row">
                <div className="col-md-5 mb-3 text-md-end">
                  <Button
                    color="success"
                    pStart={3}
                    pEnd={3}
                    pTop={2}
                    pBottom={2}
                  >
                    Découvrir les projets
                  </Button>
                </div>
                <div className="col-md-7 text-md-start">
                  <Button
                    color="outline-dark"
                    pStart={3}
                    pEnd={3}
                    pTop={2}
                    pBottom={2}
                  >
                    Soumettre un projet
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ProjectCard {...projects[1]} />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.missions} pt-5 pb-5 `}>
        <div className={`container-fluid ${styles.metricsRow} pt-3`}>
          <div className={`row `}>
            {homeMetrics.map((metric) => (
              <div key={uuid()} className="col-md-3 mb-3">
                <MetricCard color="success-subtle" {...metric} />
              </div>
            ))}
          </div>
        </div>
        <div className={`container ${styles.sectionHeadTexts} pt-3 pb-3`}>
          <small className="textSecondaryGreen text-md-start">
            COMMENT ÇA MARCHE
          </small>
          <div className="row">
            <div className="col-md-6 text-md-start">
              <h2 className="textMainGreen">
                Trois étapes.
                <br />
                Un projet financé.
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <p>
                De la soumission à l'exécution, chaque étape
                <br />
                structurée avec rigueur et transparence.
              </p>
            </div>
          </div>
        </div>
        <div className="container bg-white rounded">
          <div className="row ">
            <div className="col-md-4 ">
              <div
                className={`card customMissionCard text-start rounded-0 border-top-0 border-start-0 border-bottom-0`}
              >
                <div className="card-body">
                  <p className="step">1</p>

                  <h5 className="card-title  fw-bold textMainGreen">
                    Tu soumets ton projet
                  </h5>
                  <p className="card-text fw-light">
                    Présente ton besoin, ton modèle et le montant. Notre équipe
                    analyse avant toute publication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className={`card customMissionCard text-start rounded-0 border-top-0 border-start-0 border-bottom-0`}
              >
                <div className="card-body">
                  <p className="step">2</p>

                  <h5 className="card-title  fw-bold textMainGreen">
                    La communauté finance
                  </h5>
                  <p className="card-text fw-light">
                    Ton projet est publié. Chaque franc est tracé en temps réel
                    par la communauté.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className={`card customMissionCard text-start rounded-0 border-0`}
              >
                <div className="card-body">
                  <p className="step">3</p>

                  <h5 className="card-title  fw-bold textMainGreen">
                    Tu exécutes, on suit
                  </h5>
                  <p className="card-text fw-light">
                    Les fonds sont débloqués. Tu reportes l'avancement. Les
                    remboursements sont planifiés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.projects} pt-5 pb-5`}>
        <div className="container-fluid">
          <small className="textSecondaryGreen">PROJETS EN VEDETTE</small>
          <div className="row">
            <div className="col-lg-6 text-start">
              <h2 className="textMainGreen">Soutenez un projet aujourd'hui</h2>
            </div>
            <div className="col-lg-6 d-none d-md-block text-end">
              <button
                className="btn btn-outline-dark rounded-pill"
                type="submit"
              >
                Voir tous les projets
              </button>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div key={uuid()} className="col-lg-4 mb-3">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <button
            className="btn btn-outline-dark rounded-pill w-100 d-md-none"
            type="submit"
          >
            Voir tous les projets
          </button>
        </div>
      </section>
      <section className={`${styles.missions} pt-5 pb-5 `}>
        <div className={`container ${styles.sectionHeadTexts} pt-3 pb-3`}>
          <small className="textSecondaryGreen text-md-start">
            MODES DE FINANCEMENT
          </small>
          <div className="row">
            <div className="col-md-4 text-md-start">
              <h2 className="textMainGreen">
                Le bon mécanisme pour chaque projet
              </h2>
              <p>
                GUINUTY accompagne le cycle de vie complet — du don solidaire à
                l'entrée en capital.
              </p>
            </div>
            <div className="col-md-8 text-start">
              <div>
                <h5 className="card-title  fw-bold textMainGreen">DON</h5>
                <p className="card-text fw-light">
                  Pour des projets à impact communautaire ou culturel. Les
                  contributeurs donnent selon leurs moyens, sans retour
                  financier attendu.
                </p>
              </div>
              <hr />
              <div>
                <h5 className="card-title  fw-bold textMainGreen">Prêt</h5>
                <p className="card-text fw-light">
                  Des investisseurs prêtent à une PME avec un rendement clair et
                  un échéancier suivi. 0% de taux de défaut chez GUINUTY.
                </p>
              </div>
              <hr />
              <div>
                <h5 className="card-title  fw-bold textMainGreen">Equity</h5>
                <p className="card-text fw-light">
                  Pour les entreprises à forte ambition. Les investisseurs
                  entrent dans le capital et partagent la valeur créée sur le
                  long terme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToActionSection
        title="Prêt à faire grandir vos idées ?"
        text=" Rejoignez la communauté GUINUTY, que vous soyez porteur de projet ou
          investisseur."
        buttonOneText="Créer un compte"
        buttonTwoText="Comment ça marche"
      />
    </>
  );
};

export default Landing;
