import MetricCard from "./MetricCard";
import FundingProgressBar from "./FundingProgressBar";
import InvestmentForm from "./InvestmentForm";
import { useState } from "react";
import Button from "./Button";
const FundingCard = ({
  goal,
  collected,
  campaignDuration,
  kycAudit,
  efficiency,
  investors,
  remainingDays = 0,
  remainingParts,
  leaveCapital,
  investmentType,
}) => {
  return (
    <div role="button" className="card fundingCard">
      {/* <div className="card-body">
        <small>Collecté</small>
        <p>
          <span className="textMainGreen fs-4">{collected}</span>{" "}
          <small>GNF</small>{" "}
        </p>
        <FundingProgressBar collected={collected} goal={goal} />
        <div className="row mt-3">
          <div className="col-md-6 mb-2">
            <MetricCard title={investors} description="Investisseurs" />
          </div>
          <div className="col-md-6 mb-2">
            <MetricCard title={remainingDays} description="Restants" />
          </div>
          <div className="col-md-6 mb-2">
            <MetricCard title={efficiency} description="Rendement" />
          </div>
          <div className="col-md-6 mb-2">
            <MetricCard title={duration} description="Durée" />
          </div>
          {projectType === "equity" && (
            <>
              <div className="col-md-6 mb-2">
                <MetricCard
                  title={remainingParts}
                  description="Parts restantes"
                />
              </div>
              <div className="col-md-6 mb-2">
                <MetricCard title={leaveCapital} description="Capital cede" />
              </div>
            </>
          )}
        </div>
        <InvestmentForm investmentType={projectType} />
      </div> */}
      <div className="card-body">
        <h2 className="textMainGreen">Analyse IA</h2>
        <p className="text-success">{kycAudit.feedback}</p>
        <Link>
          <Button color="outline-success">Modifier mon projet</Button>
        </Link>
        <hr />
        <div className="bg-success-gradient2 rounded p-3 text-light fw-bold">
          <ul>
            <li>
              💰 Payez dès maintenant les frais de publication pour ouvrir les
              contributions publiques !
            </li>
            <li>
              📌 Note : La durée de votre campagne commencera uniquement après
              le règlement des frais.
            </li>
          </ul>
          <Button width="100" color="warning">
            Payer 1000000
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FundingCard;
