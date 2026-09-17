import { v4 as uuid } from "uuid";
import MetricCard from "../components/MetricCard";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import styles from "./Landing.module.css";
import CallToActionSection from "../components/CallToActionSection";
import { data, Link } from "react-router-dom";
import { homeMetrics, projects } from "../utils/dummyDatas";
const Landing = () => {
  return (
    <>
      <section className={`${styles.home} text-light`}>
        <div className="container">
          {" "}
          <div className="row">
            <div className="col-md-6 text-start">
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
                <div className="col-md-5 mb-3 text-end">
                  <Link to="projects">
                    <Button color="success" padding="px-3 py-2" type="button">
                      Découvrir les projets
                    </Button>
                  </Link>
                </div>
                <div className="col-md-7 text-end text-md-start ">
                  <Button
                    color="outline-warning"
                    padding="px-3 py-2"
                    type="button"
                    offcanvasId="offcanvasSignIn"
                  >
                    Soumettre un projet
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 mt-5 mt-md-0">
              <ProjectCard {...projects[1]} />
            </div> */}
          </div>
        </div>
      </section>
      <div className={`container-fluid ${styles.metricsRow}`}>
        <div className={`row `}>
          {homeMetrics.map((metric) => (
            <div key={uuid()} className="col-md-3 mb-3">
              <MetricCard {...metric} />
            </div>
          ))}
        </div>
      </div>
      <section className={`${styles.missions} pt-5 pb-5 `}>
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
              <p>De la soumission à l'exécution.</p>
              <p>Chaque étape structurée avec rigueur et transparence.</p>
            </div>
          </div>
        </div>
        <div className="container bg-white rounded border-start-md">
          <div className="row ">
            <div className="col-md-4 ">
              <div
                className={`card customMissionCard text-start rounded-0 border-0`}
              >
                <div className="card-body">
                  <p className="step">1</p>

                  <h5 className="card-title  fw-bold textMainGreen">
                    Tu soumets ton projet
                  </h5>
                  <p className="card-text fw-light">
                    Présente ton besoin. L'équipe valide tout avant la parution.
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-4 ">
              <div
                className={`card customMissionCard text-start rounded-0 border-0`}
              >
                <div className="card-body">
                  <p className="step">2</p>

                  <h5 className="card-title  fw-bold textMainGreen">
                    Le public te soutient
                  </h5>
                  <p className="card-text fw-light">
                    Ton projet est en ligne. Chaque franc est suivi en direct.
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-4 ">
              <div
                className={`card customMissionCard text-start rounded-0 border-0`}
              >
                <div className="card-body">
                  <p className="step">3</p>

                  <h5 className="card-title  fw-bold textMainGreen">
                    Tu crées et l'on suit
                  </h5>
                  <p className="card-text fw-light">
                    Les fonds sont libérés, tu partages l'avancée du travail.
                  </p>
                </div>
              </div>
              <hr className="d-none d-md-block" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className={`${styles.projects} pt-5 pb-5`}>
        <div className="container-fluid">
          <small className="textSecondaryGreen">PROJETS EN VEDETTE</small>
          <div className="row">
            <div className="col-lg-6 text-start">
              <h2 className="textMainGreen">Soutenez un projet aujourd'hui</h2>
            </div>
            <div className="col-lg-6 d-none d-md-block text-end">
              <Link to="projects">
                <Button color="success" padding="px-3 py-2" type="button">
                  Découvrir les projets
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div key={uuid()} className="col-lg-4 mb-3">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="d-md-none">
            <Link to="projects">
              <Button color="success" padding="px-3 py-2" type="button">
                Découvrir les projets
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
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
                GUINUTY accompagne le cycle de vie complet. Du don solidaire à
                l'entrée en capital.
              </p>
            </div>
            <div className="col-md-8 text-start">
              <div>
                <h5 className="card-title  fw-bold textMainGreen">Don</h5>
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
        buttonOne={{
          text: "Créer un compte",
          offcanvasId: "offcanvasSignUp",
        }}
        buttonTwo={{ text: "Comment ça marche", link: "steps" }}
      />
    </>
  );
};

export default Landing;

const loader = async ({ request, params }) => {
  const response = await fetch();

  if (!response.ok) {
    throw data();
  }
};
