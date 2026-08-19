const Footer = ({ userAuth, onScreenChange }) => {
  return (
    <section id="footer" className="text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">
            <ul className="p-0">
              <li>
                <h2>GUINUTY</h2>
              </li>
              <li>
                La première plateforme de financement participatif en Guinée.
              </li>
            </ul>
          </div>
          {!userAuth && (
            <>
              <div className="col-md-2 ">
                <ul className="p-0">
                  <li>Projets en cours</li>
                  <li>Comment ça marche</li>
                  <li>Soumettre un projet</li>
                  <li>Connexion</li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul className="p-0">
                  <li>CGU</li>
                  <li>CGP – Prêt</li>
                  <li>CGI – Capital</li>
                  <li>CGD – Don</li>
                </ul>
              </div>
              <div className="col-md-3 ">
                <ul className="p-0">
                  <li>contact@guinuty.com</li>
                  <li>www.guinuty.com</li>
                  <li>Kipé, Conakry</li>
                  <li>République de Guinée</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <small>© 2026 GUINUTY SAS — Tous droits réservés</small>
          </div>
          <div className="col-md-6 fw-bold text-md-end ">
            <small>Commission : 8% sur les montants levés</small>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(0)}
            >
              0
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(1)}
            >
              1
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(2)}
            >
              2
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(3)}
            >
              3
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(4)}
            >
              4
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(5)}
            >
              5
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(6)}
            >
              6
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(7)}
            >
              7
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(8)}
            >
              8
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(9)}
            >
              9
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(10)}
            >
              10
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(11)}
            >
              11
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(12)}
            >
              12
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(13)}
            >
              13
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(14)}
            >
              14
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(15)}
            >
              15
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(16)}
            >
              16
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(17)}
            >
              17
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(18)}
            >
              18
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(19)}
            >
              19
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(20)}
            >
              20
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              type="button"
              onClick={() => onScreenChange(21)}
            >
              21
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
