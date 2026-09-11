//Removed unnecessary components import, give alias to missionCard to be more section related.Outsourced local datas.
import { v4 as uuid } from "uuid";
import StepCard from "../components/MissionCard";
import Button from "../components/Button";
import styles from "./HowItWorks.module.css";
import CallToActionSection from "../components/CallToActionSection";
import { investorSteps, entrepreneurSteps, faqs } from "../utils/dummyDatas";
import { Link } from "react-router-dom";
const HowItWorks = () => {
  return (
    <>
      <section
        className={`position-relative overflow-hidden ${styles.home} pt-5 pb-5`}
      >
        <div className="text-center">
          <span className="badge rounded-pill text-bg-warning">
            <marquee direction="left" scrollamount="3">
              La 1re plateforme de financement participatif hybride en Guinée
            </marquee>
          </span>

          <h1 className="text-white text-center mt-3 mb-3">
            Comment fonctionne
            <br />
            GUINUTY ?
          </h1>

          <p className="text-white">
            Du dépôt de projet au remboursement.
            <br />
            Tout ce que tu dois savoir pour investir ou lever des fonds en toute
            confiance.
          </p>
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0 text-md-end">
              <Link to="/projects">
                <Button color="warning" padding="p-3">
                  Je veux investir
                </Button>
              </Link>
            </div>
            <div className="col-md-6 text-md-start">
              <Button
                color="outline-light"
                padding="p-3"
                offcanvasId="offcanvasSignUp"
              >
                J'ai un projet
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.steps} pt-5 pb-5`}>
        <div className={`${styles.stepsMiddleText} text-center`}>
          <small className="textSecondaryGreen">POUR LES INVESTISSEURS</small>
          <h2 className="textMainGreen">
            En 4 étapes, tu investis dans un projet guinéen
          </h2>
          <p>
            Porté par les infrastructures, l'entrepreneuriat et la diaspora
            guinéenne.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {investorSteps.map((step) => (
              <div key={uuid()} className="col-lg-3 col-md-6 mb-3 ">
                <StepCard {...step} border={0} bgColor={step.bgColor} />
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.missionMiddleText} text-center mt-5`}>
          <small className="textSecondaryGreen">
            POUR LES PORTEURS DE PROJET
          </small>
          <h2 className="textMainGreen">
            Du dossier à la levée — un chemin clair
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {entrepreneurSteps.map((step) => (
              <div key={uuid()} className="col-lg-3 col-md-6 mb-3">
                <StepCard {...step} border={0} bgColor={step.bgColor} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection
        title="Prêt à passer à l'acte ?"
        text="Rejoins des centaines d'investisseurs et de porteurs de projets qui construisent la Guinée de demain."
        buttonOne={{
          text: "Soumettre un projet",
          offcanvasId: "offcanvasSignUp",
        }}
        buttonTwo={{ text: "Voir les projets", link: "/projects" }}
      />
      <section className={`${styles.faqs} pt-5 pb-5`}>
        <div className={`${styles.faqsMiddleText} text-center`}>
          <small className="textSecondaryGreen">FAQ</small>
          <h2 className="textMainGreen">Questions fréquentes</h2>
          {faqs.map((question) => (
            <div
              key={question.id}
              className="accordion mb-3 text-start"
              id={"accordion" + question.id}
            >
              <div className="accordion-item">
                <h2 className="accordion-header fw-bold">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + question.id}
                    aria-expanded="false"
                    aria-controls={"collapse" + question.id}
                  >
                    {question.text}
                  </button>
                </h2>
                <div
                  id={"collapse" + question.id}
                  className="accordion-collapse collapse"
                  data-bs-parent={"#accordion" + question.id}
                >
                  <div className="accordion-body">
                    <p className="fw-light">{question.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
