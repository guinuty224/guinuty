import Button from "../components/Button";
import styles from "./EntrepreneurUpdate.module.css";
import MetricCard from "../components/MetricCard";
const EntrepreneurUpdate = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">Mises a jour</h1>
        <p>Ici, vous pouvez effectuer vos mises a jour projet.</p>
        <hr />
        <div className="bg-light p-3 mb-3 rounded border">
          <form>
            <div className="row">
              <div class="mb-3 col-md-4">
                <label
                  for="updateTitle"
                  class="form-label fw-bold textMainGreen"
                >
                  📌 Titre de la mise a jour
                </label>
                <input type="text" class="form-control" id="updateTitle" />
              </div>
              <div class="mb-3 col-md-4">
                <label
                  htmlFor="project"
                  className="form-label fw-bold textMainGreen"
                >
                  📋 Pour le projet
                </label>
                <select
                  className="form-select"
                  aria-label="Activer ou desactiver la connexion par mot de passe..."
                  id="project"
                  defaultValue="yes"
                >
                  <option value="yes">Projet 1</option>
                  <option value="no">Projet 2</option>
                </select>
              </div>
              <div className="mb-3 col-md-4">
                <label for="formFile" class="form-label fw-bold textMainGreen">
                  📄 Ajouter un fichier
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  📝 Votre message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="text-end">
              <Button color="success" pStart={3} pEnd={3} pTop={3} pBottom={3}>
                Sauvegarder
              </Button>
            </div>
          </form>
        </div>
        <div className="container bg-light p-3 rounded border">
          <div class="table-responsive">
            <table class="table">
              <thead className="">
                <tr>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🏷️ #ID</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📋 Projet</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🚦 Status</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📅 Echeance</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🛠️ Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Projet 1</td>
                  <td>
                    {" "}
                    <span class="badge rounded-pill text-bg-warning">
                      En attente
                    </span>
                  </td>
                  <td>
                    <span class="badge rounded-pill text-bg-success">
                      29-08-2030
                    </span>
                  </td>
                  <td>
                    {" "}
                    <div class="dropdown">
                      <Button
                        width={100}
                        tPosition="start"
                        color={"outline-success"}
                        border={0}
                        rounded={0}
                        fWeight="bold"
                        pStart={2}
                        pEnd={2}
                        pBottom={2}
                        pTop={2}
                        dropdown
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Menu
                      </Button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            👁️ Voir
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            ✏️ Demander un report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurUpdate;
