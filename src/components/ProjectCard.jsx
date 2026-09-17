//out sourced the categories array, replaced the medias props by extend since its only purpose is to determine if the card will be expended into bigger format htmlFor display in individual project page
import FundingProgressBar from "./FundingProgressBar";
import MetricCard from "./MetricCard";
import { v4 as uuid } from "uuid";
import { projectCategories as categories } from "../utils/dummyDatas";
import { useState } from "react";

import truncateHtmlText from "../utils/truncateHTML";
import formatRichText from "../utils/formatRichText";

const ProjectCard = ({
  type,
  images,
  sector,
  title,
  description,
  fundingUsage,
  status,
  location,
  extend,
}) => {
  return (
    <div className={`card projectCard overflow-hidden `}>
      {images ? (
        <img
          src={`https://3emyy40jt3.ucarecd.net/${images[0]}/`}
          className="card-img-top"
          alt="..."
        />
      ) : (
        <div
          className="projectBackground position-relative"
          style={{
            height: extend && "20rem",
          }}
        ></div>
      )}
      <div className="card-body">
        <span className="badge border rounded-pill m-1 textMainGreen">
          {sector}
        </span>
        <span className="badge border  rounded-pill m-1 textMainGreen">
          {status}
        </span>
        <span className="badge border  rounded-pill m-1 textMainGreen">
          {location}
        </span>
        <h5 className="card-title fw-bold textMainGreen">{title}</h5>
        {extend ? (
          <>
            {" "}
            <div
              className="clean-text-wrap"
              dangerouslySetInnerHTML={{
                __html: formatRichText(description),
              }}
            />
            <hr />
            <div
              className="clean-text-wrap"
              dangerouslySetInnerHTML={{
                __html: formatRichText(fundingUsage),
              }}
            />
          </>
        ) : (
          <p className="card-text fw-light">{truncateHtmlText(description)}</p>
        )}

        {/* {collected && !extend && (
          <FundingProgressBar collected={collected} goal={goal} />
        )} */}
      </div>
    </div>
  );
};
export default ProjectCard;
