import Button from "../components/Button";
import TextEditor from "../components/TextEditor";
import { useFetcher, useLoaderData } from "react-router-dom";
import { v4 as uuid } from "uuid";
import styles from "./UploadProject.module.css";
import sectors from "../utils/sectors";
import { useState } from "react";
import projectTypes from "../utils/projectTypes";
import getLocalStorage from "../utils/getLocalStorage";
import { errorToast, successToast } from "../utils/toast";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import guineaLocations from "../utils/guineaLocations";
import { redirect } from "react-router-dom";
import "@uploadcare/react-uploader/core.css";

const EditProject = () => {
  const project = useLoaderData();
  const [images, setImages] = useState([]);
  const [rccm, setRccm] = useState(project.type.rccmDocumentUrl);
  const [type, setType] = useState(project.type);
  const fetcher = useFetcher();

  const handleIdUploadSuccess = (state) => {
    const file = state.successEntries.map(({ uuid, cdnUrl }) => ({
      uuid,
      cdnUrl,
    }));
    setRccm(file[0].uuid);
  };
  const handlePicturesUploadSuccess = (state) => {
    const file = state.successEntries.map(({ uuid, cdnUrl }) => ({
      uuid,
      cdnUrl,
    }));
    const newImages = file.map((image) => image.uuid);
    setImages(newImages);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

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
          <h1 className="text-white mt-3 mb-3">Modifier votre projet</h1>

          <p className="text-white">
            Votre projet sera vérifié automatiquement dès la soumission.
            <br />
            Si des ajustements sont nécessaires, les consignes s'afficheront
            ci-dessous.
          </p>
        </div>
      </section>
      <section className={`${styles.forms} pt-5 pb-5`}>
        <div className="container">
          <div className="bg-white p-3 rounded mb-3 border">
            <h2 className="fw-bold textMainGreen">Analise IA</h2>
            <p className="fw-bold text-danger">{project.kycAudit.feedback}</p>
            <hr />
          </div>
          <fetcher.Form method="POST" action="/dashboard">
            <input name="images" value={JSON.stringify(images)} hidden />
            <input name="projectId" value={project._id} hidden />
            <div className="bg-white p-3 rounded mb-3 border">
              <h2 className="fw-bold textMainGreen">Le projet</h2>
              <small>Decrivez ce que vous voulez financer</small>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label
                      htmlFor="title"
                      className="form-label fw-bold textMainGreen"
                    >
                      Intitule du projet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      defaultValue={project.title}
                      placeholder="Ex : Agrandissement des salles de classe"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="type"
                      className="form-label fw-bold textMainGreen"
                    >
                      Type de financement
                    </label>
                    <select
                      className="form-select"
                      aria-label="Choisir le secteur..."
                      id="type"
                      name="type"
                      value={type}
                      onChange={handleType}
                      required
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="sector"
                      className="form-label fw-bold textMainGreen"
                    >
                      Secteur
                    </label>
                    <select
                      className="form-select"
                      aria-label="Choisir le secteur..."
                      id="sector"
                      name="sector"
                      defaultValue={project.sector}
                      required
                    >
                      {sectors.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="location"
                      className="form-label fw-bold textMainGreen"
                    >
                      Localisation du projet
                    </label>
                    <select
                      className="form-select"
                      aria-label="Choisir le lieu..."
                      id="location"
                      defaultValue={project.location}
                      name="location"
                      required
                    >
                      {guineaLocations.map((location) => (
                        <option key={location.value} value={location.value}>
                          {location.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="form-label fw-bold textMainGreen"
                >
                  Description du projet
                </label>
                <TextEditor
                  name="description"
                  defaultValue={project.description}
                />
              </div>
              <hr />
              <label className="form-label fw-bold textMainGreen">
                Les precedentes images
              </label>
              <div className="row">
                {project.images.map((image) => (
                  <div className="col-2">
                    <img
                      src={`https://3emyy40jt3.ucarecd.net/${image}/`}
                      class="img-thumbnail"
                    />
                  </div>
                ))}
              </div>
              <hr />
              <label className="form-label fw-bold textMainGreen">
                Ajouter de nouvelle images{" "}
                <span className="text-warning fw-bold">(3 max)</span>
                <FileUploaderRegular
                  pubkey="36702f41b78321885c1e"
                  imgOnly={true}
                  multiple={true}
                  maxLocalFileSizeBytes={10 * 1024 * 1024} // 10MB per file max
                  sourceList="local"
                  multipleMax={3}
                  accept="image/*"
                  onCommonUploadSuccess={handlePicturesUploadSuccess}
                  useCloudImageEditor={false}
                  useLocalImageEditor={false}
                  localeName="fr"
                />
              </label>
              <div className="row">
                {images.map((image) => (
                  <div className="col-2">
                    <img
                      src={`https://3emyy40jt3.ucarecd.net/${image}/`}
                      class="img-thumbnail"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-3 rounded mb-3 border">
              <h2 className="fw-bold textMainGreen">Besoin de financement</h2>
              <small>Montant et conditions souhaitees</small>
              <hr />
              {type === "donation" && (
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="goal"
                        className="form-label fw-bold textMainGreen"
                      >
                        Montant sollicite (GNF)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="goal"
                        name="goal"
                        defaultValue={project.goal}
                        placeholder="Ex : 1 200 000 000"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="campaignDuration"
                        className="form-label fw-bold textMainGreen"
                      >
                        Duree souhaitee en jours
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        min={30}
                        id="campaignDuration"
                        name="campaignDuration"
                        defaultValue={project.campaignDuration}
                        placeholder="Ex : 30 "
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="fundingUsage"
                      className="form-label fw-bold textMainGreen"
                    >
                      Affectation des fonds
                    </label>
                    <TextEditor
                      name="fundingUsage"
                      defaultValue={project.fundingUsage}
                      placeholder="Explication de l'utilisation des dons..."
                    />
                  </div>
                </div>
              )}
              {type === "equity" && (
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor="sharePrice"
                        className="form-label fw-bold textMainGreen"
                      >
                        Prix d'une part (GNF)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="sharePrice"
                        name="sharePrice"
                        defaultValue={project.sharePrice}
                        placeholder="Ex : 100000"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor="totalSharesOffered"
                        className="form-label fw-bold textMainGreen"
                      >
                        Total de part offerte
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="totalSharesOffered"
                        name="totalSharesOffered"
                        defaultValue={project.totalSharesOffered}
                        placeholder="Ex : 100"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor="rccmNumber"
                        className="form-label fw-bold textMainGreen"
                      >
                        Numero RCCM
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="rccmNumber"
                        name="rccmNumber"
                        defaultValue={project.rccmNumber}
                        placeholder="Ex : GN.TTC.2019.A.02830"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor="rccmDocumentUrl"
                        className="form-label fw-bold textMainGreen"
                      >
                        Documment RCCM
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
                      <input
                        name="rccmDocumentUrl"
                        value={JSON.stringify(rccm)}
                        hidden
                      />
                      {rccm[0] && (
                        <a
                          className="btn btn-sm btn-dark rounded mt-2"
                          href={rccm[0].cdnUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Voir le RCCM
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="fundingUsage"
                      className="form-label fw-bold textMainGreen"
                    >
                      Affectation des fonds
                    </label>
                    <TextEditor
                      defaultValue={project.fundingUsage}
                      name="fundingUsage"
                      placeholder="Utilisation du capital levé (ex: 40% R&D, 30% Recrutement, 30% Expansion commerciale)...."
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              {fetcher.state === "submitting" ? (
                <Button
                  color="warning"
                  width={100}
                  padding="py-1"
                  type="button"
                  disabled={true}
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> ✨ Analise en cours...</span>
                </Button>
              ) : (
                <Button
                  color="outline-dark"
                  width={100}
                  padding="py-1"
                  type="submit"
                  name="request"
                  value="projectReview"
                >
                  ✨ Analyser mon projet
                </Button>
              )}
            </div>
          </fetcher.Form>
        </div>
      </section>
    </>
  );
};

export default EditProject;
export const loader = async ({ request, params }) => {
  if (!getLocalStorage()) {
    return redirect("/");
  }
  const { token } = getLocalStorage();
  try {
    const response = await fetch(
      `https://guinuty-0aaf959abbbf.herokuapp.com/user/project/edit/${params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.clear();
        closeAllOffcanvas();
        errorToast(data);
        return redirect("/");
      }
      errorToast(data);
      return null;
    }
    if (data.status === "pendingPayment") {
      successToast({
        message:
          "Le projet a passé avec succès l'étape de vérification par notre IA.",
      });
      return redirect(
        `https://guinuty-0aaf959abbbf.herokuapp.com/user/project/${data._id}`,
      );
    }
    return data;
  } catch (error) {
    errorToast(error);
    return null;
  }
};
