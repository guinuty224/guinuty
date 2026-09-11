import Button from "../components/Button";
import styles from "./EntrepreneurSecurityForm.module.css";
import {
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import { Form } from "react-router-dom";
import { useState } from "react";

const EntrepreneurSecurityForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const user = useRouteLoaderData("root-data");
  const navigation = useNavigation();
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Securite</h1>
        <p>
          Ici, vous pouvez modifier vos moyens de connexion et votre mot de
          passe.
        </p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <Form method="patch" action="/user">
            <input name="request" value="passwordUpdate" hidden></input>
            <div className="row">
              <div class="mb-3 col-md-6">
                <label for="password" class="form-label fw-bold textMainGreen">
                  🔐 Nouveau mot de passe
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-control"
                  id="password"
                  placeholder="monmotdepasse"
                  name={"password"}
                />
                <p
                  type="button"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="badge rounded-pill text-bg-dark"
                >
                  {showPassword
                    ? "🚫 Masquer les mots de passe"
                    : "👁️ Afficher les mots de passe"}
                </p>
              </div>
              <div class="mb-3 col-md-6">
                <label
                  for="passwordConfirm"
                  class="form-label fw-bold textMainGreen"
                >
                  ✔️ Confirmer le nouveau mot de passe
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-control"
                  id="passwordConfirm"
                  placeholder="monmotdepasse"
                  name="passwordConfirm"
                />
              </div>
            </div>

            <div className="text-end">
              {navigation.state === "submitting" ? (
                <Button padding="px-2" type="button" disabled={true}>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> 💾 Sauvegarde en cours...</span>
                </Button>
              ) : (
                <Button padding="px-2" type="submit">
                  💾 Sauvegarder
                </Button>
              )}
            </div>
          </Form>
          <hr />
          <Form method="patch" action="/user">
            <input name="request" value="signInOption" hidden></input>
            <div className="row">
              <div class="mb-3 col-md-6">
                <label
                  htmlFor="passwordSignIn"
                  className="form-label fw-bold textMainGreen"
                >
                  🆔 Connexion par mot de passe
                </label>
                <select
                  className="form-select"
                  aria-label="Activer ou desactiver la connexion par mot de passe..."
                  id="passwordSignIn"
                  name="passwordSignIn"
                  defaultValue="yes"
                >
                  <option value="yes">🟢 OUI</option>
                  <option value="no">🔴 NON</option>
                </select>
              </div>
              <div class="mb-3 col-md-6">
                <label
                  htmlFor="otpSignIn"
                  className="form-label fw-bold textMainGreen"
                >
                  📲 Connexion par code SMS
                </label>
                <select
                  className="form-select"
                  aria-label="Activer ou desactiver la connexion par code OTP..."
                  id="otpSignIn"
                  defaultValue="yes"
                  name="otpSignIn"
                >
                  <option value="yes">🟢 OUI</option>
                  <option value="no">🔴 NON</option>
                </select>
              </div>
            </div>
            <div className="text-end">
              {navigation.state === "submitting" ? (
                <Button padding="px-2" type="button" disabled={true}>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> 💾 Sauvegarde en cours...</span>
                </Button>
              ) : (
                <Button padding="px-2" type="submit">
                  💾 Sauvegarder
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurSecurityForm;
