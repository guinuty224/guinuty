import MetricCard from "../components/MetricCard";
import ProjectCard from "../components/ProjectCard";
import { formatCompactNumber } from "../utils/formaters";
import styles from "./UserDashboard.module.css";

import { useRouteLoaderData } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";
import getLocalStorage from "../utils/getLocalStorage";
import { errorToast, successToast, infoToast } from "../utils/toast";
import objectFromFormData from "../utils/objectFromFormData";
import errorCodes from "../utils/errorCodes";
import closeAllOffcanvas from "../utils/closeAllOffcanvas";
import today from "../utils/today";

const UserDashboard = () => {
  const user = useRouteLoaderData("root-data");
  console.log(user);

  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>{today()}</small>
        <h1 className="textMainGreen fw-bold">Vue d'ensemble</h1>
        <h3>
          {user.fullname} | {user.role.toUpperCase()}
        </h3>
        <hr />
        {user.role === "administrator" ? (
          <div className="text-center text-light bg-success p-2 rounded">
            <h1>
              📉
              <br />
              Aucun projet pour le moment.
            </h1>
          </div>
        ) : user.projects.length === 0 ? (
          <div className="text-center text-light bg-success p-2 rounded">
            <h1>
              📉
              <br />
              Aucun projet pour le moment.
            </h1>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  {" "}
                  <ProjectCard
                    {...{
                      category: "Éducation",
                      title: "École Les Champions",
                      smallDesc:
                        "Agrandissement des salles de classe d'un établissement franco-guinéen de référence.",
                      collected: 744000000,
                      goal: 1200000000,
                      duration: 32,
                      efficiency: 31,
                    }}
                  />
                </div>
                <div className="col-lg-6">
                  <MetricCard
                    value={14}
                    description="Investisseurs"
                    mBottom={3}
                    textAlign="start"
                    fSize={true}
                    fColor="success"
                    bgImage="investors"
                  />
                  <MetricCard
                    value={744000000 + " GNF"}
                    description="Montant leve"
                    mBottom={3}
                    textAlign="start"
                    fSize={true}
                    fColor="warning"
                    bgImage="fund"
                  />
                  <MetricCard
                    value={"15 mai 2026"}
                    description="Prochaine echeance"
                    textAlign="start"
                    fSize={true}
                    bgImage="reimbursements"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default UserDashboard;
export const loader = async ({ request, params }) => {
  if (!getLocalStorage()) {
    return redirect("/");
  }
  const { token, id } = getLocalStorage();
  try {
    const response = await fetch(
      "https://guinuty-0aaf959abbbf.herokuapp.com/user",
      {
        body: JSON.stringify({ id }),
        method: "POST",
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
    errorToast(error);
    return null;
  }
};
export const action = async ({ request, params }) => {
  const body = await objectFromFormData(request);
  const { token } = getLocalStorage();
  if (!token) {
    return redirect("/");
  }
  switch (body.request) {
    case "kyc": {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/user/settings/verification",
          {
            method: "get",
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
          console.log(data);
          infoToast(data);
          return null;
        }
        console.log(data);
        infoToast(data);
        return null;
      } catch (error) {
        errorToast(error);
        return null;
      }
      break;
    }

    case "phoneNumberUpdate": {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/user/settings/phone",
          {
            body: JSON.stringify(body),
            method: request.method,
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
        successToast(data);
        return data;
      } catch (error) {
        errorToast(error);
        return null;
      }
    }
    case "passwordUpdate": {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/user/settings/password",
          {
            body: JSON.stringify(body),
            method: request.method,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 401) {
            console.log("Je suis laaa");
            localStorage.clear();
            closeAllOffcanvas();
            errorToast(data);
            return redirect("/");
          }
          errorToast(data);
          return null;
        }
        successToast(data);
        return null;
      } catch (error) {
        errorToast(error);
        return null;
      }
      break;
    }
    case "signInOptionUpdate": {
      if (body.passwordSignIn === "false" && body.otpSignIn === "false") {
        Swal.fire({
          title: `Erreur`,
          text: "Veuillez activer au moins une option pour pouvoir vous connecter.",
          icon: "error",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return {};
      }
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/user/settings/signin",
          {
            body: JSON.stringify(body),
            method: request.method,
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
          return {};
        }
        successToast(data);
        return {};
      } catch (error) {
        errorToast(error);
        return {};
      }
    }
    case "projectReview": {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/user/project/review",
          {
            body: JSON.stringify(body),
            method: request.method,
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
          console.log(data);
          errorToast(data);
          return null;
        }
        console.log(data);
        successToast(data);
        return redirect(`/dashboard/project/edit/${data.projectId}`);
      } catch (error) {
        errorToast(error);
        return null;
      }
      break;
    }

    default: {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/user/settings",
          {
            body: JSON.stringify(body),
            method: request.method,
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
        successToast(data);
        return null;
      } catch (error) {
        errorToast(error);
        return null;
      }
    }
  }
};
