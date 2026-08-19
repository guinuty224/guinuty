import Button from "../components/Button";
import styles from "./EntrepreneurKYCForm.module.css";

const EntrepreneurKYCForm = () => {
  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>Dimanche, 6 Avril 2026</small>
        <h1 className="textMainGreen fw-bold">KYC</h1>
        <p>Ici, vous pouvez modifier vos parametre KYC.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <div class="table-responsive">
            <table class="table">
              <thead className="">
                <tr>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🏷️ #ID</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📋 Document</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🚦 Status</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">📅 Expiration</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🛠️ Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>CIN</td>
                  <td>
                    {" "}
                    <span class="badge rounded-pill text-bg-success">
                      Valide
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
                            ✏️ Remplacer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>RCCM</td>
                  <td>
                    {" "}
                    <span class="badge rounded-pill text-bg-success">
                      Valide
                    </span>
                  </td>
                  <td>
                    <span class="badge rounded-pill text-bg-success">-</span>
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
                            ✏️ Remplacer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>NIF</td>
                  <td>
                    {" "}
                    <span class="badge rounded-pill text-bg-danger">
                      Invalide
                    </span>
                  </td>
                  <td>
                    <span class="badge rounded-pill text-bg-danger">
                      01-01-2026
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
                            ✏️ Remplacer
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
export default EntrepreneurKYCForm;
