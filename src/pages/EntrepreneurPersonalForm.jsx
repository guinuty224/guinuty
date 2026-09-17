import Button from "../components/Button";
import styles from "./EntrepreneurPersonalForm.module.css";
import { v4 as uuid } from "uuid";
import { useFetcher } from "react-router-dom";
import { countries, nationalities } from "../utils/dummyDatas";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import { QRCodeCanvas } from "qrcode.react";
import "@uploadcare/react-uploader/core.css";
import {
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import { Form } from "react-router-dom";
import { useState } from "react";
import today from "../utils/today";

const EntrepreneurPersonalForm = () => {
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const user = useRouteLoaderData("root-data");
  const actionData = fetcher.data;

  const [selects, setSelects] = useState({
    country: user.country,
    nationality: user.nationality,
    idDoc: user.idDoc,
    selfie: user.selfie,
  });
  const selectHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSelects((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSelfieUploadSuccess = (state) => {
    const file = state.successEntries.map(({ uuid, cdnUrl }) => ({
      uuid,
      cdnUrl,
    }));
    console.log(file);
    setSelects((prevState) => {
      return { ...prevState, selfie: file[0].uuid };
    });
  };
  const handleIdUploadSuccess = (state) => {
    const file = state.successEntries.map(({ uuid, cdnUrl }) => ({
      uuid,
      cdnUrl,
    }));
    console.log(file);
    setSelects((prevState) => {
      return { ...prevState, idDoc: file[0].uuid };
    });
  };
  const formatKycDate = (dateValue) => {
    if (!dateValue) return "Non vérifié";

    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long", // "long" -> septembre | "2-digit" -> 09 | "short" -> sept.
      year: "numeric",
    }).format(new Date(dateValue));
  };
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>{today()}</small>
        <h1 className="textMainGreen fw-bold">Informations personnelles</h1>
        <p>Ici, vous pouvez modifier vos informations personnelles.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <fetcher.Form method="patch" action="/dashboard">
            <div className="row">
              <div class="mb-3 col-md-4">
                <label for="fullname" class="form-label fw-bold textMainGreen">
                  👤 Nom complet
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  defaultValue={user.fullname}
                  name="fullname"
                  required
                />
              </div>
              <div class="mb-3 col-md-4">
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
                  value={selects.nationality}
                  onChange={selectHandle}
                  name="nationality"
                >
                  {nationalities.map((item) => (
                    <option value={item.value} key={uuid()}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-3 col-md-4">
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
                  value={selects.country}
                  onChange={selectHandle}
                  name="country"
                >
                  {countries.map((item) => (
                    <option value={item.value} key={uuid()}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-3 col-md-12">
                <label for="address" class="form-label fw-bold textMainGreen">
                  🏠 Adresse complete
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  defaultValue={user.address}
                />
              </div>
            </div>
            <div className="text-end">
              {fetcher.state === "submitting" ? (
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
          </fetcher.Form>
          <hr />
          {user.role == "administrator" && (
            <div className="bg-success-gradient2 rounded p-3 text-light fw-bold mb-3">
              <span role="status"> ✅ Vérification Automatique</span>
              <p>
                Vos privilèges d'administrateur valident automatiquement votre
                compte. Aucune vérification KYC n'est nécessaire.
              </p>
            </div>
          )}
          {!user.kycVerified && (
            <>
              <div className="bg-success-gradient2 rounded p-3 text-light  mb-3">
                <span role="status" className="fw-bold">
                  {" "}
                  🪪 Vérification d'identité (KYC)
                </span>
                <ul>
                  <li>
                    ⏱️ Rapide : Prend moins d'une minute.Le code restera
                    toujours disponible ici.
                  </li>
                  <li>
                    📋 Requis : Une pièce d'identité valide et votre caméra
                    frontale 📸.
                  </li>
                  <li>
                    🛡️ Avantage : Un statut vérifié booste la confiance de la
                    communauté et s'affiche sur tous vos projets !
                  </li>
                </ul>
                <p>
                  Si vous avez déjà terminé votre KYC et souhaitez actualiser
                  votre statut immédiatement sans attendre la mise à jour
                  automatique, cliquez sur le bouton ci-dessous.
                </p>
              </div>
              <fetcher.Form method="post" action="/dashboard">
                <input name="request" value="kyc" hidden />
                {fetcher.state === "submitting" ? (
                  <Button padding="px-2" type="button" disabled={true}>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> 🔄 Actualisation en cours...</span>
                  </Button>
                ) : (
                  <Button padding="px-2" type="submit">
                    🔄 Actualiser mon statut
                  </Button>
                )}
              </fetcher.Form>
              <div className="text-center">
                <QRCodeCanvas value={user.kycVerificationLink} />
              </div>
            </>
          )}
          {user.kycVerified && (
            <div className="bg-success-gradient2 rounded p-3 text-light fw-bold mb-3">
              <span role="status"> ✅ Vérification KYC Valider</span>
              <p>
                Votre identité a été vérifiée avec succès ! Votre statut vérifié
                est désormais actif et visible sur l'ensemble de vos projets.
              </p>
              <p>📅 Valide jusqu'au : {formatKycDate(user.kycVerifiedEndAt)}</p>
            </div>
          )}
          {!actionData?.details?.approved && (
            <ul class="list-group list-group-flush p-2 mt-3">
              {actionData?.details?.rejectionReasons.map((reason) => (
                <li class="list-group-item fw-bold text-danger" key={uuid()}>
                  {reason}
                </li>
              ))}
            </ul>
          )}
          <hr />
          <fetcher.Form method="patch" action="/dashboard">
            <input name="request" value="phoneNumberUpdate" hidden></input>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="userPhone"
                  className="form-label fw-bold textMainGreen"
                >
                  📱 Tel
                </label>
                {actionData?.newPhone ? (
                  <input
                    type="tel"
                    className="form-control "
                    id="userPhone"
                    name="phone"
                    aria-describedby="userPhoneHelp"
                    value={actionData.newPhone}
                    readOnly
                  />
                ) : (
                  <input
                    type="tel"
                    className="form-control "
                    id="userPhone"
                    name="phone"
                    aria-describedby="userPhoneHelp"
                    placeholder="Votre numero de tel..."
                    defaultValue={user.phone}
                    required
                  />
                )}
              </div>
              {actionData?.newPhone && (
                <div className="mb-3 col-md-6">
                  <label
                    htmlFor="userOTP"
                    className="form-label fw-bold textMainGreen"
                  >
                    📲 Code OTP
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="userOTP"
                    name="otp"
                    aria-describedby="userOtpHelp"
                    placeholder="Votre code OTP..."
                    required
                  />

                  <div id="userOtpHelp" className="form-text">
                    Veuillez saisir le code OTP que vous avez recu pour valider
                    la modification. Via le{" "}
                    <b className="text-danger">+224 625 55 31 73</b>
                  </div>
                </div>
              )}
            </div>
            <div className="text-end">
              {fetcher.state === "submitting" ? (
                <Button padding="px-2" type="button" disabled={true}>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> 📲 Envoi du code...</span>
                </Button>
              ) : (
                <Button padding="px-2" type="submit">
                  {actionData?.newPhone ? "💾 Enregistrer" : "📲  Verifier"}
                </Button>
              )}
            </div>
          </fetcher.Form>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurPersonalForm;
