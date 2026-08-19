import Button from "../components/Button";
import styles from "./InvestorSecurityForm.module.css";

import { useState } from "react";

const InvestorSecurityForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Securite</h1>
        <p>Ici, vous pouvez modifier vos moyens de connexion a mot de passe.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <form>
            <div className="row">
              <div class="mb-3 col-md-4">
                <label
                  for="currentPassword"
                  class="form-label fw-bold textMainGreen"
                >
                  🔑 Mot de passe actuelle
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-control"
                  id="currentPassword"
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
              <div class="mb-3 col-md-4">
                <label
                  for="newPassword"
                  class="form-label fw-bold textMainGreen"
                >
                  🔐 Nouveau mot de passe
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-control"
                  id="newPassword"
                />
              </div>
              <div class="mb-3 col-md-4">
                <label
                  for="confirmNewPassword"
                  class="form-label fw-bold textMainGreen"
                >
                  ✔️ Confirmer le nouveau mot de passe
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-control"
                  id="confirmNewPassword"
                />
              </div>

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
                >
                  <option value="yes">🟢 OUI</option>
                  <option value="no">🔴 NON</option>
                </select>
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
export default InvestorSecurityForm;
