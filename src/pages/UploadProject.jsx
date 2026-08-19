import Button from "../components/Button";
import styles from "./UploadProject.module.css";

const UploadProject = () => {
  return (
    <>
      <section
        className={`position-relative overflow-hidden ${styles.home} pt-5 pb-5 ps-md-3`}
      >
        <div className="text-center text-md-start">
          <span className="badge rounded-pill text-bg-warning">
            <marquee direction="left" scrollamount="3">
              La 1re plateforme de financement participatif hybride en Guinée
            </marquee>
          </span>
          <h1 className="text-white mt-3 mb-3">
            Faites financer votre projet par la communaute
          </h1>

          <p className="text-white">
            Remplissez ce formulaire. Notre comite d'investissement etudie
            chaque dossier et revient vers vous sous 7 jours ouvres.
          </p>
        </div>
        <div id="greenCircle" className="rounded-circle "></div>
        <div id="yellowCircle" className="rounded-circle"></div>
      </section>
      <section className={`${styles.forms} pt-5 pb-5`}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="text-center">
                <div
                  className={`w-100 bg-success ${styles.stepBar} rounded`}
                ></div>
                <small>Identite</small>
              </div>
            </div>
            <div className="col-3">
              <div className="text-center">
                <div
                  className={`w-100 bg-secondary ${styles.stepBar} rounded`}
                ></div>
                <small>Projet</small>
              </div>
            </div>
            <div className="col-3">
              <div className="text-center">
                <div
                  className={`w-100 bg-secondary ${styles.stepBar} rounded`}
                ></div>
                <small>Financement</small>
              </div>
            </div>
            <div className="col-3">
              <div className="text-center">
                <div
                  className={`w-100 bg-secondary ${styles.stepBar} rounded`}
                ></div>
                <small>Pieces</small>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded mb-3 mt-5 border">
            <h2 className="fw-bold textMainGreen">Identite du porteur</h2>
            <small>Vous et votre structure</small>
            <hr />
            <form>
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label
                      htmlFor="projectName"
                      className="form-label fw-bold textMainGreen"
                    >
                      Nom de la structure/projet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      placeholder="Ex : Ecole Les Champions"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="entrepreneurName"
                      className="form-label fw-bold textMainGreen"
                    >
                      Nom de la structure/projet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="entrepreneurName"
                      placeholder="Ex : Diallo Djenabou"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="entrepreneurEmail"
                      className="form-label fw-bold textMainGreen"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="entrepreneurEmail"
                      placeholder="Ex : contact@exemple.com"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="companyType"
                      className="form-label fw-bold textMainGreen"
                    >
                      Forme juridique
                    </label>
                    <select
                      className="form-select"
                      aria-label="Choisir la forme juridique..."
                      id="companyType"
                    >
                      <option selected>Choisir la forme juridique...</option>
                      <option value="1">SA</option>
                      <option value="2">SARL</option>
                      <option value="3">SUARL</option>
                      <option value="1">Entreprise individuelle</option>
                      <option value="2">Cooperative</option>
                      <option value="3">Autre</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="projectPhone"
                      className="form-label fw-bold textMainGreen"
                    >
                      Telephone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectPhone"
                      placeholder="+224 6XX XX XX XX"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="location"
                      className="form-label fw-bold textMainGreen"
                    >
                      Ville/Commune
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Kipe, Ratoma, Conakry"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-white p-3 rounded mb-3 border">
            <h2 className="fw-bold textMainGreen">Le projet</h2>
            <small>Decrivez ce que vous voulez financer</small>
            <hr />
            <form>
              <div className="mb-3">
                <label
                  htmlFor="projectTitle"
                  className="form-label fw-bold textMainGreen"
                >
                  Intitule du projet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="projectTitle"
                  placeholder="Ex : Agrandissement des salles de classe"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="projectField"
                      className="form-label fw-bold textMainGreen"
                    >
                      Secteur
                    </label>
                    <select
                      className="form-select"
                      aria-label="Choisir le secteur..."
                      id="projectField"
                    >
                      <option selected>Choisir le secteur...</option>
                      <option value="1">Education</option>
                      <option value="2">Immobilier</option>
                      <option value="3">Industrie</option>
                      <option value="1">Agriculture</option>
                      <option value="2">Commerce</option>
                      <option value="3">Tech/Sante</option>
                      <option value="3">Autre</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="projectLocation"
                      className="form-label fw-bold textMainGreen"
                    >
                      Localisation du projet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectLocation"
                      placeholder="Ex : Conakry"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="projectDescription"
                  className="form-label fw-bold textMainGreen"
                >
                  Description du projet
                </label>
                <textarea
                  className="form-control"
                  id="projectDescription"
                  rows="3"
                  placeholder="Presentez le projet, ses objectifs, son utilite et pourquoi il est essentiel"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="bg-white p-3 rounded mb-3 border">
            <h2 className="fw-bold textMainGreen">Besoin de financement</h2>
            <small>Montant et conditions souhaitees</small>
            <hr />
            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label
                      htmlFor="fundingAmount"
                      className="form-label fw-bold textMainGreen"
                    >
                      Montant sollicite (GNF)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="fundingAmount"
                      placeholder="Ex : 1 200 000 000"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label
                      htmlFor="fundingDuration"
                      className="form-label fw-bold textMainGreen"
                    >
                      Duree souhaitee en mois
                    </label>
                    <select
                      className="form-select"
                      aria-label="Choisir la duree..."
                      id="fundingDuration"
                    >
                      <option selected>Choisir la duree ...</option>
                      <option value="1">12</option>
                      <option value="2">18</option>
                      <option value="3">24</option>
                      <option value="1">36</option>
                      <option value="2">48</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label
                      htmlFor="personalFund"
                      className="form-label fw-bold textMainGreen"
                    >
                      Apport personnel (GNF)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="personalFund"
                      placeholder="Ex : 240 000 000"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="fundUsage"
                  className="form-label fw-bold textMainGreen"
                >
                  Affectation des fonds
                </label>
                <textarea
                  className="form-control"
                  id="fundUsage"
                  rows="3"
                  placeholder="Detaillez l'utilisation prevue des fonds (postes principaux)"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="bg-white p-3 rounded mb-3 border">
            <h2 className="fw-bold textMainGreen">Pieces justificatives</h2>
            <small>Document a joindre (PDF, JPG)</small>
            <hr />
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="mb-3 text-center border-2 rounded bg-secondary-subtle p-3"
                    type="button"
                    style={{ borderStyle: "dotted" }}
                  >
                    <p>🗎 Business plan</p>
                    <small>Cliquer pour ajouter</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="mb-3 text-center border-2 rounded bg-secondary-subtle p-3"
                    type="button"
                    style={{ borderStyle: "dotted" }}
                  >
                    <p>🗎 Etats financier (3 mois)</p>
                    <small>Cliquer pour ajouter</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="mb-3 text-center border-2 rounded bg-secondary-subtle p-3"
                    type="button"
                    style={{ borderStyle: "dotted" }}
                  >
                    <p>🗎 RCCM/NIF</p>
                    <small>Cliquer pour ajouter</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="mb-3 text-center border-2 rounded bg-secondary-subtle p-3"
                    type="button"
                    style={{ borderStyle: "dotted" }}
                  >
                    <p>🗎 Piece d'identite du dirigeant</p>
                    <small>Cliquer pour ajouter</small>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <small type="button">Annuler</small>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <Button color="outline-dark" width={100} pTop={1} pBottom={1}>
                Enregistrer le brouillon
              </Button>
            </div>
            <div className="col-md-3 ">
              <Button color="success" width={100} pTop={1} pBottom={1}>
                Soumettre mon projet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadProject;
