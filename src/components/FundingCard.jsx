import MetricCard from "./MetricCard";
import FundingProgressBar from "./FundingProgressBar";
import InvestmentForm from "./InvestmentForm";
import { useState } from "react";
const FundingCard = ({
  goal,
  collected,
  duration,
  efficiency,
  investors = 0,
  remainingDays = 0,
  remainingParts,
  leaveCapital,
  investmentType,
}) => {
  const [projectType, setProjectType] = useState("donation");
  const changeType = () => {
    if (projectType === "donation") {
      setProjectType("loan");
    }
    if (projectType === "loan") {
      setProjectType("equity");
    }
    if (projectType === "equity") {
      setProjectType("donation");
    }
  };
  return (
    <div onClick={changeType} role="button" className="card fundingCard">
      <div className="card-body">
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
      </div>
    </div>
  );
};
export default FundingCard;
