//removed unnecessary imports and used section accurate name htmlFor the metricCard import, outsourced project datas.

import FundingCard from "../components/FundingCard";
import ProjectCard from "../components/ProjectCard";
import styles from "./Project.module.css";
import getLocalStorage from "../utils/getLocalStorage";
import { useLoaderData } from "react-router-dom";
const UserProject = () => {
  const project = useLoaderData();
  console.log(project);
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProject;
export const loader = async ({ request, params }) => {
  if (!getLocalStorage()) {
    return redirect("/");
  }
  const { token } = getLocalStorage();
  try {
    const response = await fetch(
      `https://guinuty-0aaf959abbbf.herokuapp.com/user/project/${params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.clear();
        closeAllOffcanvas();
        errorToast(data);
        return redirect("/");
      }
      errorToast(data);
      return null;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log("Je suis la");
    errorToast(error);
    return null;
  }
};
