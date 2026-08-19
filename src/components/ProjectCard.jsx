//out sourced the categories array, replaced the medias props by extend since its only purpose is to determine if the card will be expended into bigger format htmlFor display in individual project page
import FundingProgressBar from "./FundingProgressBar";
import MetricCard from "./MetricCard";
import { v4 as uuid } from "uuid";
import { projectCategories as categories } from "../utils/dummyDatas";
import { useState } from "react";

const ProjectCard = ({
  image,
  category,
  title,
  smallDesc,
  progress,
  goal,
  collected,
  duration,
  efficiency,
  keyPoints,
  extend,
  deadlines,
  onClick,
}) => {
  const [clicked, setClicked] = useState(false);
  const categoryData = categories.find((cat) => cat.name === category);

  return (
    <div
      className={`card projectCard overflow-hidden ${extend && "bg-transparent border-0"}`}
      role={!extend && "button"}
    >
      {image ? (
        <img src="..." className="card-img-top" alt="..." />
      ) : (
        <div
          className="projectBackground position-relative"
          style={{
            backgroundColor: categoryData.bgColor,
            height: extend && "20rem",
          }}
        >
          <p className="projectIcon position-absolute top-50 start-50 translate-middle fs-1">
            {categoryData.icon}
          </p>
        </div>
      )}
      <div className="card-body">
        <span
          className="badge rounded-pill mb-3 textMainGreen"
          style={{ backgroundColor: categoryData.bgColor }}
        >
          {category}
        </span>
        <h5 className="card-title fw-bold textMainGreen">{title}</h5>
        <p className="card-text fw-light">{smallDesc}</p>
        {keyPoints && (
          <>
            <small className="textSecondaryGreen">POURQUOI INVESTIR</small>
            <div className="row">
              {keyPoints.map((keyPoint) => (
                <div key={uuid()} className="col-md-6 mb-2">
                  <MetricCard {...keyPoint} textAlign="start" />
                </div>
              ))}
            </div>
          </>
        )}
        {collected && !extend && (
          <FundingProgressBar collected={collected} goal={goal} />
        )}
        {duration && efficiency && !extend && (
          <div className="row">
            <div className="col-6 text-start fs-6">
              <span className="badge rounded-pill text-bg-light">
                ⏱ {duration} mois
              </span>
            </div>
            <div className="col-6 text-end">
              <span className="badge rounded-pill text-bg-success">
                Rendement {efficiency}%
              </span>
            </div>
          </div>
        )}
        {extend && (
          <table className="table table-transparent">
            <tbody>
              {deadlines.map((deadline) => (
                <tr key={uuid()}>
                  <td>
                    <small>{deadline.period}</small>
                  </td>
                  <td className="text-end">
                    <small>{deadline.amount}</small>
                  </td>
                  <td className="text-end">
                    {" "}
                    <span className="badge rounded-pill text-bg-warning">
                      {deadline.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
