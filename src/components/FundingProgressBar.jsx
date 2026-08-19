//Exported the number formatter to another file in utils format.
import { formatCompactNumber } from "../utils/formaters";
const FundingProgressBar = ({ collected, goal }) => {
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow={`${(collected * 100) / goal}`}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ height: 0.5 + "rem" }}
      >
        <div
          className="progress-bar bg-success rounded-pill progress-bar-striped progress-bar-animated"
          style={{ width: (collected * 100) / goal + "%" }}
        ></div>
      </div>
      <div className="row">
        <div className="col-6 text-start fs-6">
          <small>{formatCompactNumber(collected)} levés</small>
        </div>
        <div className="col-6 text-end">
          <small>
            {(collected * 100) / goal}%/{formatCompactNumber(goal)}
          </small>
        </div>
      </div>
    </>
  );
};
export default FundingProgressBar;
