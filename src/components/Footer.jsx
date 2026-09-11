const Footer = ({ userAuth }) => {
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
              <div className="col-md-2">
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
    </section>
  );
};
export default Footer;
