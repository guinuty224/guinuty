import Button from "./Button";
const InvestmentForm = ({ investmentType }) => {
  const investmentTypes = [
    {
      type: "donation",
      label: "Montant du don",
    },
    {
      type: "loan",
      label: "Montant du pret",
    },
    {
      type: "equity",
      label: "Montant de l'investissement",
    },
  ];
  const investmentField = investmentTypes.find(
    (element) => element.type === investmentType,
  );
  console.log(investmentField);
  return (
    <>
      {investmentType === "loan" && (
        <div className="mb-1 mt-5 mt-md-0">
          <label
            htmlFor="loanConditions"
            className="form-label fw-bold textMainGreen"
          >
            Conditions du pret
          </label>
          <input
            type="text"
            className="form-control bg-warning-subtle border border-warning"
            id="loanConditions"
            value={`Taux ${8}% - Duree ${8} mois - Differe ${8} mois`}
            disabled
          />
        </div>
      )}
      {investmentType === "equity" && (
        <div className="mb-1 mt-5 mt-md-0">
          <label
            htmlFor="loanConditions"
            className="form-label fw-bold textMainGreen"
          >
            Prix d'un part
          </label>
          <input
            type="text"
            className="form-control bg-warning-subtle border border-warning"
            id="loanConditions"
            value={`200 000 GNF`}
            disabled
          />
        </div>
      )}
      <form>
        <div className="mb-1 mt-5 mt-md-0">
          <label
            htmlFor="investmentAmount"
            className="form-label fw-bold textMainGreen"
          >
            {investmentField.label} (GNF)
          </label>
          <input
            type="number"
            className="form-control"
            id="investmentAmount"
            aria-describedby="investmentHelp"
          />
        </div>
        {investmentType === "donation" && (
          <div className="mb-3">
            <label
              htmlFor="investorMessage"
              className="form-label fw-bold textMainGreen"
            >
              Message de l'investisseur
            </label>
            <textarea
              className="form-control"
              id="investorMessage"
              rows="2"
              placeholder="Votre message pour le porteur du projet"
            />
          </div>
        )}
        {/* <div className="mb-3">
        <label htmlFor="investorMessage" className="form-label">
          Message au porteur
        </label>
        <textarea
          className="form-control"
          id="fundUsage"
          rows="3"
          placeholder="Detaillez l'utilisation prevue des fonds (postes principaux)"
        ></textarea>
        <input
          type="number"
          className="form-control"
          id="investorMessage"
          aria-describedby="investmentHelp"
        />
       
      </div> */}
        {investmentType === "loan" && (
          <div>
            <p className="form-label fw-bold textMainGreen">Projection</p>
            <div className="bg-success-gradient border border-success rounded table-responsive p-2">
              <table class="table table-borderless table-transparent ">
                <tbody>
                  <tr>
                    <td>Capital prete</td>
                    <td className="text-end textSecondaryGreen">100000 GNF</td>
                  </tr>
                  <tr>
                    <td>Taux annuel</td>
                    <td className="text-end ">8 %</td>
                  </tr>
                  <tr>
                    <td>Duree</td>
                    <td className="text-end ">18 mois</td>
                  </tr>
                  <tr>
                    <td>Interet attendus</td>
                    <td className="text-end textSecondaryGreen">12.000 GNF</td>
                  </tr>
                </tbody>

                <tfoot class=" fw-bold border border-success border-start-0 border-end-0 border-bottom-0 table-row-striped-top-border border-2">
                  <tr>
                    <td>Total a recevoir</td>
                    <td className="text-end textSecondaryGreen">112.000 GNF</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
        {investmentType === "equity" && (
          <div>
            <p className="form-label fw-bold textMainGreen">
              Calcul automatique
            </p>
            <div className="bg-success-gradient border border-success rounded table-responsive p-2">
              <table class="table table-borderless table-transparent ">
                <tbody>
                  <tr>
                    <td>Montant saisi</td>
                    <td className="text-end textSecondaryGreen">
                      100 000 000 GNF
                    </td>
                  </tr>
                  <tr>
                    <td>Prix d'une part</td>
                    <td className="text-end ">200.000GNF</td>
                  </tr>
                  <tr>
                    <td>Parts attribuees</td>
                    <td className="text-end ">500 parts</td>
                  </tr>
                  <tr>
                    <td>% de l'entreprise detenu</td>
                    <td className="text-end textSecondaryGreen">10%</td>
                  </tr>
                </tbody>

                <tfoot class=" fw-bold border border-success border-start-0 border-end-0 border-bottom-0 table-row-striped-top-border border-2">
                  <tr>
                    <td>Montant debite</td>
                    <td className="text-end textSecondaryGreen">
                      100.000.000 GNF
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
        <div className="form-text text-center">
          <p>
            Contribution soumis aux conditions.
            <br />
            Voir ici
          </p>
        </div>
        <Button color="success" width={100} pTop={2} pBottom={2} mBottom={3}>
          Valider
        </Button>
        <Button color="outline-dark" width={100} pTop={2} pBottom={2}>
          Comment ça marche
        </Button>
      </form>
    </>
  );
};

export default InvestmentForm;
