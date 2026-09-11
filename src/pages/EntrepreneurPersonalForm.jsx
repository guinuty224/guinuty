import Button from "../components/Button";
import styles from "./EntrepreneurPersonalForm.module.css";
import { v4 as uuid } from "uuid";
import { useFetcher } from "react-router-dom";
import { countries, nationalities } from "../utils/dummyDatas";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import {
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import { Form } from "react-router-dom";
import { useState } from "react";

const EntrepreneurPersonalForm = () => {
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const user = useRouteLoaderData("root-data");
  const actionData = fetcher.data;
  console.log(actionData);
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
    setSelects((prevState) => {
      return { ...prevState, selfie: file[0].cdnUrl };
    });
  };
  const handleIdUploadSuccess = (state) => {
    const file = state.successEntries.map(({ uuid, cdnUrl }) => ({
      uuid,
      cdnUrl,
    }));
    setSelects((prevState) => {
      return { ...prevState, idDoc: file[0].cdnUrl };
    });
  };

  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Informations personnelles</h1>
        <p>Ici, vous pouvez modifier vos informations personnelles.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <Form method="patch" action="/user">
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
          {
            (user.role = "administrator" && (
              <div className="bg-success-gradient2 rounded p-3 text-light fw-bold mb-3">
                <span role="status"> ✅ Vérification Automatique</span>
                <p>
                  Vos privilèges d'administrateur valident automatiquement votre
                  compte. Aucune vérification KYC n'est nécessaire.
                </p>
              </div>
            ))
          }
          {user.verified === "ongoing" && (
            <div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <a
                    className="btn d-block btn-sm btn-dark rounded mt-2"
                    href={selects.selfie}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🤳 Voir mon selfie
                  </a>
                </div>
                <div className="mb-3 col-md-6">
                  <a
                    className="btn d-block btn-sm btn-dark rounded mt-2"
                    href={selects.idDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🪪 Voir ma piece d'identité
                  </a>
                </div>
              </div>
              <div className="bg-danger rounded p-3 text-light fw-bold mb-3">
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status"> ✅ Verification en cours...</span>
                <p>
                  Ces documents sont en cours de verification. Aucune autre
                  soumission ne sera possible tant que la vérification en cours
                  n'aura pas été validée ou refusée.
                </p>
              </div>
            </div>
          )}
          {user.verified === "no" && (
            <Form method="patch" action="/user">
              <input name="request" value="verification" hidden></input>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label
                    for="formFile"
                    class="form-label fw-bold textMainGreen"
                  >
                    🤳 Ajouter un selfie
                  </label>
                  <FileUploaderRegular
                    pubkey="36702f41b78321885c1e"
                    imgOnly={true}
                    multiple={false}
                    sourceList="local"
                    accept="image/*"
                    onCommonUploadSuccess={handleSelfieUploadSuccess}
                    useCloudImageEditor={false}
                    useLocalImageEditor={false}
                    localeName="fr"
                  />
                  <input name="selfie" value={selects.selfie} hidden></input>
                  {selects.selfie && (
                    <a
                      className="btn btn-sm btn-dark rounded mt-2"
                      href={selects.selfie}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le document
                    </a>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label
                    for="formFile"
                    class="form-label fw-bold textMainGreen"
                  >
                    🪪 Ajouter une piece d'identité
                  </label>
                  <FileUploaderRegular
                    pubkey="36702f41b78321885c1e"
                    imgOnly={false}
                    multiple={false}
                    sourceList="local"
                    accept="application/pdf*"
                    onCommonUploadSuccess={handleIdUploadSuccess}
                    useCloudImageEditor={false}
                    useLocalImageEditor={false}
                    localeName="fr"
                  />
                  <input name="idDoc" value={selects.idDoc} hidden></input>
                  {selects.idDoc && (
                    <a
                      className="btn btn-sm btn-dark rounded mt-2"
                      href={selects.idDoc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le document
                    </a>
                  )}
                </div>
              </div>
              <div className="bg-danger rounded p-3 text-light fw-bold mb-3">
                <p>
                  Ces documents serviront à vérifier votre compte. Pour
                  accélérer la procédure, veillez à fournir un selfie bien clair
                  et une pièce d'identité lisible au format PDF. Aucune autre
                  soumission ne sera possible tant que la vérification en cours
                  n'aura pas été validée ou refusée.
                </p>
              </div>

              {user.verified === "ongoing" ? (
                <Button padding="px-2" type="button" disabled={true}>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> ✅ Verification en cours...</span>
                </Button>
              ) : (
                <div className="text-end">
                  {navigation.state === "submitting" ? (
                    <Button padding="px-2" type="button" disabled={true}>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span role="status"> ✅ Envoi en cours...</span>
                    </Button>
                  ) : (
                    <Button padding="px-2" type="submit">
                      ✅ Verifier mon identité
                    </Button>
                  )}
                </div>
              )}
            </Form>
          )}

          <hr />
          <fetcher.Form method="patch" action="/user">
            <input name="request" value="updatePhone" hidden></input>
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
