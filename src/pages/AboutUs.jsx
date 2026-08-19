//outsourced missions qualities and metrics data, removed unused component import.
import { v4 as uuid } from "uuid";
import MetricCard from "../components/MetricCard";
import MissionCard from "../components/MissionCard";
import styles from "./AboutUs.module.css";
import CallToActionSection from "../components/CallToActionSection";
import { missions, qualities, metrics } from "../utils/dummyDatas";
const AboutUs = () => {
  return (
    <>
      <section
        className={`position-relative overflow-hidden ${styles.home} pt-5 pb-5`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-warning">
                <marquee direction="left" scrollamount="3">
                  La 1re plateforme de financement participatif hybride en
                  Guinée
                </marquee>
              </span>
              <h1 className="text-white mt-3 mb-3">
                Nous croyons que l'argent guinéen peut construire la Guinée
              </h1>
              <p className="text-white">
                GUINUTY est né d'un constat simple : des millions de Guinéens
                épargnent et investissent — mais pas en Guinée. Le financement
                participatif peut changer ça.
              </p>
              <div className="row">
                <div className="col-6 mb-3 mb-md-0 col-">
                  <MetricCard
                    value="0%"
                    description="Défaut"
                    textAlign="start"
                  />
                </div>
                <div className="col-6 mb-3 mb-md-0">
                  <MetricCard
                    value="8-20%"
                    description="Rendement"
                    textAlign="start"
                  />
                </div>
                <div className="col-12 mb-5 mt-md-3">
                  <MetricCard
                    value="100%"
                    description="Satisfaction"
                    textAlign="start"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container ">
                <div className="row ">
                  {missions.map((mission, index) => (
                    <div
                      key={uuid()}
                      className={`col-md-6 mb-3 ${(index == 1 || index == 3) && "mt-lg-3"}`}
                    >
                      <MissionCard
                        {...mission}
                        border={0}
                        bgColor={mission.bgColor}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="greenCircle" className="rounded-circle "></div>
        <div id="yellowCircle" className="rounded-circle"></div>
      </section>
      <section className={`${styles.projects} pt-5 pb-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-start p-4">
              <small className="textSecondaryGreen">NOTRE MISSION</small>
              <h2 className="textMainGreen">
                Mobiliser les ressources de la diaspora et de l'épargne locale
              </h2>
              <p>
                La Guinée compte plus de 3 millions de ressortissants à
                l'étranger. Des milliards de francs guinéens dorment dans des
                comptes bancaires ou partent en transferts. GUINUTY crée le pont
                entre cet argent et les projets économiques qui ont besoin de
                financement.
                <br />
                <br />
                Nous croyons que le développement économique de la Guinée se
                construira par les Guinéens — localement et depuis la diaspora —
                si on leur donne le bon outil.
              </p>
            </div>
            <div className="col-md-6 text-start p-4">
              <small className="textSecondaryGreen">NOTRE VISION</small>
              <h2 className="textMainGreen">
                Devenir la référence du financement participatif en Afrique de
                l'Ouest
              </h2>
              <p>
                En 2026, GUINUTY est la première plateforme opérationnelle de
                financement participatif en Guinée. Dans les 5 prochaines
                années, nous visons l'expansion au Sénégal, en Côte d'Ivoire et
                au Mali, avec un modèle réplicable et adapté à chaque marché.
              </p>
              <MetricCard
                bgColor="success-subtle"
                textAlign="start"
                value="Objectif 2026"
                description="250 M GNF levés · 120 nouveaux investisseurs · 20 projets financés · 10 ambassadeurs actifs"
              />
            </div>
          </div>
        </div>
      </section>
      <CallToActionSection
        title="Tu partages notre vision ?"
        text="Que tu sois investisseur, porteur de projet ou partenaire — rejoins le mouvement GUINUTY."
        buttonOneText="Rejoindre GUINUTY"
        buttonTwoText="Nous contacter"
      />
      <section className={`${styles.missions} pt-5 pb-5`}>
        <div className="container">
          <div className={`text-center`}>
            <small className="textSecondaryGreen">L'ÉQUIPE</small>
            <h2 className="textMainGreen">Les personnes derrière GUINUTY</h2>
            <p>
              Une équipe pluridisciplinaire unie par une conviction commune:
              <br />
              le financement participatif peut transformer l'économie guinéenne.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <MetricCard
                textAlign="start"
                pTop={3}
                pBottom={3}
                pStart={2}
                pEnd={2}
                borderTop={1}
                border={5}
                value="Martin Luther Keïta"
                position="GÉRANT/CEO"
                description="Fondateur de GUINUTY et de Tedsom. Pionnier de l'inclusion financière digitale en Guinée."
              />
            </div>
            <div className="col-md-4 mb-3">
              <MetricCard
                textAlign="start"
                pTop={3}
                pBottom={3}
                pStart={2}
                pEnd={2}
                borderTop={1}
                border={5}
                value="Mamadi Conde"
                position="CO-FONDATEUR/COO"
                description="Opérations et développement commercial. Expert en structuration de projets en Afrique de l'Ouest."
              />
            </div>
            <div className="col-md-4 mb-3">
              <MetricCard
                textAlign="start"
                pTop={3}
                pBottom={3}
                pStart={2}
                pEnd={2}
                borderTop={1}
                border={5}
                value="Salimatou Diallo"
                position="RELATIONS CLIENTÈLE"
                description="Interface entre GUINUTY, les investisseurs et les porteurs de projets."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="text-center ">
            <small className="textSecondaryGreen">NOS VALEURS</small>
            <h2 className="textMainGreen">
              Ce qui guide chacune de nos décisions
            </h2>
          </div>
          <div className="row">
            {qualities.map((quality, index) => (
              <div key={uuid()} className={`col-lg-3 col-md-6 mb-md-3`}>
                <MissionCard
                  {...quality}
                  border={0}
                  bgColor={quality.bgColor}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
