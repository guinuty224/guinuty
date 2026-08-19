import Button from "../components/Button";
import styles from "./EntrepreneurPersonalForm.module.css";
import { countries, nationalities } from "../utils/dummyDatas";

const EntrepreneurPersonalForm = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Informations personnelles</h1>
        <p>Ici, vous pouvez modifier vos informations personnelles.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <form>
            <div className="row">
              <div class="mb-3 col-md-4">
                <label for="lastName" class="form-label fw-bold textMainGreen">
                  👤 Nom
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  value="Camara"
                />
              </div>
              <div class="mb-3 col-md-4">
                <label for="firstName" class="form-label fw-bold textMainGreen">
                  Prenom
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  value="Salia"
                />
              </div>
              <div className="mb-3 col-md-4">
                <label for="formFile" class="form-label fw-bold textMainGreen">
                  🖼️ Ajouter une photo
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="mb-3 col-md-6">
                <label for="email" class="form-label fw-bold textMainGreen">
                  ✉️ Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value="ceo@studified.xyz"
                />
              </div>
              <div class="mb-3 col-md-6">
                <label for="phone" class="form-label fw-bold textMainGreen">
                  📱 Telephone
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  value="+224625553173"
                />
              </div>
              <div class="mb-3 col-md-6">
                <label
                  htmlFor="nationality"
                  className="form-label fw-bold textMainGreen"
                >
                  🪪 Nationalités
                </label>
                <select
                  className="form-select"
                  aria-label="Choisir votre nationalite..."
                  id="nationality"
                  defaultValue="guineenne"
                >
                  {nationalities.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div class="mb-3 col-md-6">
                <label
                  htmlFor="country"
                  className="form-label fw-bold textMainGreen"
                >
                  🌍 Pays de résidence
                </label>
                <select
                  className="form-select"
                  aria-label="Choisir votre pays de residence..."
                  id="country"
                  defaultValue="GN"
                >
                  {countries.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div class="mb-3 col-md-12">
                <label for="address" class="form-label fw-bold textMainGreen">
                  🏠 Adresse complete
                </label>
                <input type="text" class="form-control" id="address" />
              </div>
            </div>
            <div className="text-end">
              <Button color="success" pStart={3} pEnd={3} pTop={3} pBottom={3}>
                Sauvegarder
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurPersonalForm;
