//removed unnecessary imports and used section accurate name htmlFor the metricCard import, outsourced project datas.
import FundingProgressBar from "../components/FundingProgressBar";
import entrepreneurCard from "../components/MetricCard";
import Button from "../components/Button";
import FundingCard from "../components/FundingCard";
import ProjectCard from "../components/ProjectCard";
import styles from "./Project.module.css";
import { project } from "../utils/dummyDatas";
const Project = () => {
  return (
    <>
      <div className={`container-fluid ${styles.project} pt-5 pb-5`}>
        <div className="row">
          <div className="col-md-7">
            <div>
              <ProjectCard {...project} extend />
            </div>
          </div>
          <div className="col-md-5">
            <FundingCard {...project} />
            <entrepreneurCard
              value="Mme Diallo Djenabou"
              description="Directrice & Gérante"
              textAlign="start"
              bgColor="white"
              mTop={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
