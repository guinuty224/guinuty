import Button from "../components/Button";
import styles from "./EntrepreneurPersonalForm.module.css";
import { v4 as uuid } from "uuid";
import { useFetcher, useLoaderData } from "react-router-dom";
import { countries, nationalities } from "../utils/dummyDatas";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import {
  useActionData,
  useNavigation,
  useRouteLoaderData,
  useParams,
} from "react-router-dom";
import { Form } from "react-router-dom";
import { useState } from "react";

const UserFile = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Fiche de : {user.fullname}</h1>
        <p>Ici, vous pouvez voir les informations d'un utilisateur specific.</p>
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
                  readOnly
                />
              </div>
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="nationality"
                  className="form-label fw-bold textMainGreen"
                >
                  🪪 Nationalités
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  defaultValue={user.nationality}
                  name="fullname"
                  readOnly
                />
              </div>
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="country"
                  className="form-label fw-bold textMainGreen"
                >
                  🌍 Pays de résidence
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  defaultValue={user.country}
                  name="fullname"
                  readOnly
                />
              </div>
              <div class="mb-3 col-md-8">
                <label for="address" class="form-label fw-bold textMainGreen">
                  🏠 Adresse complete
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  defaultValue={user.address}
                  readOnly
                />
              </div>
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="country"
                  className="form-label fw-bold textMainGreen"
                >
                  📱 Tel
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  defaultValue={user.phone}
                  name="fullname"
                  readOnly
                />
              </div>
            </div>
          </Form>
          <hr />
          {user.role === "administrator" && (
            <div className="bg-success-gradient2 rounded p-3 text-light fw-bold mb-3">
              <span role="status"> ✅ Vérification Automatique</span>
              <p>
                Les privilèges d'administrateur valident automatiquement ce
                compte. Aucune vérification KYC n'est nécessaire.
              </p>
            </div>
          )}
          {user.verified === "ongoing" && (
            <div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <a
                    className="btn d-block btn-sm btn-dark rounded mt-2"
                    href={user.selfie}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🤳 Voir le selfie
                  </a>
                </div>
                <div className="mb-3 col-md-6">
                  <a
                    className="btn d-block btn-sm btn-dark rounded mt-2"
                    href={user.idDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🪪 Voir la piece d'identité
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
                  Ces documents sont en cours de verification par le partenaire
                  Skalatek. Aucune autre soumission ne sera possible pour
                  l'utilisateur tant que la vérification en cours n'aura pas été
                  validée ou refusée.
                </p>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6 text-end">
                  <a
                    className="btn  btn-sm btn-success rounded mt-2"
                    rel="noopener noreferrer"
                  >
                    Valider sans l'API
                  </a>
                </div>
                <div className="mb-3 col-md-6 text-start">
                  <a
                    className="btn  btn-sm btn-outline-danger rounded mt-2"
                    rel="noopener noreferrer"
                  >
                    Rejeter sans l'API
                  </a>
                </div>
              </div>
            </div>
          )}
          {user.verified === "no" && (
            <div className="bg-info rounded p-3 text-light fw-bold mb-3">
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status"> ✅ Verification en attente...</span>
              <p>L'utilisateur n'a soumis aucun document KYC pour le moment.</p>
            </div>
          )}

          <hr />
        </div>
      </div>
    </section>
  );
};
export default UserFile;
export const loader = async ({ request, params }) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  if (!userData) {
    return redirect("/");
  }
  try {
    const response = await fetch(
      `http://localhost:8000/user/users/${params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData?.token}`,
        },
      },
    );
    const data = await response.json();
    if (!response.ok) {
      Swal.fire({
        title: `Erreur : ${response.status}`,
        text: data.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
