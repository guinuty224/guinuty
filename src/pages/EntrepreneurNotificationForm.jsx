import Button from "../components/Button";
import styles from "./EntrepreneurNotificationForm.module.css";

import { useState } from "react";

const EntrepreneurNotificationForm = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Notifications</h1>
        <p>Ici, vous pouvez modifier vos parametre de notifications.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <form>
            <div className="row">
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="projectNotifs"
                  className="form-label fw-bold textMainGreen"
                >
                  🔔📁 Pour les projets
                </label>
                <select
                  className="form-select"
                  aria-label="Activer ou desactiver la connexion par mot de passe..."
                  id="projectNotifs"
                  defaultValue="sms"
                >
                  <option value="sms">💬 Par SMS</option>
                  <option value="mail">✉️ Par mail</option>
                  <option value="all">🔄 Par mail et SMS</option>
                  <option value="no">🔴 Non</option>
                </select>
              </div>
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="refundNotifs"
                  className="form-label fw-bold textMainGreen"
                >
                  🔔💰 Pour les remboursements
                </label>
                <select
                  className="form-select"
                  aria-label="Activer ou desactiver la connexion par code OTP..."
                  id="refundNotifs"
                  defaultValue="all"
                >
                  <option value="sms">💬 Par SMS</option>
                  <option value="mail">✉️ Par mail</option>
                  <option value="all">🔄 Par mail et SMS</option>
                  <option value="no">🔴 Non</option>
                </select>
              </div>
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="projectUpdateNotifs"
                  className="form-label fw-bold textMainGreen"
                >
                  🔔📈 Pour les Mises a jour
                </label>
                <select
                  className="form-select"
                  aria-label="Activer ou desactiver la connexion par code OTP..."
                  id="projectUpdateNotifs"
                  defaultValue="no"
                >
                  <option value="sms">💬 Par SMS</option>
                  <option value="mail">✉️ Par mail</option>
                  <option value="all">🔄 Par mail et SMS</option>
                  <option value="no">🔴 Non</option>
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
export default EntrepreneurNotificationForm;
