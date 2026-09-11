import MetricCard from "../components/MetricCard";
import ProjectCard from "../components/ProjectCard";
import { formatCompactNumber } from "../utils/formaters";
import styles from "./UserDashboard.module.css";
import { useRouteLoaderData } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

const userDashboard = () => {
  const user = useRouteLoaderData("root-data");
  const today = new Date();

  const formattedDate = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const date = formattedDate
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/(\s[a-z])/g, (str) => str.toUpperCase());

  return (
    <section className={`${styles.home} pt-5 pb-5`}>
      <div className="container-fluid">
        <small>{date}</small>
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
export default userDashboard;
export const loader = async ({ request, params }) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  if (!userData) {
    return redirect("/");
  }
  try {
    const response = await fetch("http://localhost:8000/user", {
      body: JSON.stringify({ userId: userData.userId }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData?.token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      Swal.fire({
        title: `Erreur : ${response.status}`,
        text: data.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/");
    }

    return { ...data._doc };
  } catch (error) {
    console.log(error);
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const dataObject = Object.fromEntries(formData);
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;

  if (dataObject.request === "verification") {
    if (dataObject.selfie.length === 0 || dataObject.idDoc.length === 0) {
      Swal.fire({
        title: `Erreur`,
        text: "Vous devez fournir un selfie et une piece d'identité.",
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/user/settings");
    }
    try {
      const response = await fetch(
        "http://localhost:8000/user/settings/verification",
        {
          body: JSON.stringify(dataObject),
          method: request.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData?.token}`,
          },
        },
      );
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          title: `Erreur : ${response.status}`,
          text: data.message,
          icon: "error",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return redirect("/");
      }
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "info",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/user/settings");
    } catch (error) {
      Swal.fire({
        title: `Erreur : ${error.code}`,
        text: error.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/user/settings");
    }
  } else if (dataObject.request === "updatePhone") {
    try {
      const response = await fetch(
        "http://localhost:8000/user/settings/phone",
        {
          body: JSON.stringify(dataObject),
          method: request.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData?.token}`,
          },
        },
      );
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          title: `Erreur : ${response.status}`,
          text: data.message,
          icon: "error",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return redirect("/");
      }
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      console.log(data);
      return { ...data };
    } catch (error) {
      Swal.fire({
        title: `Erreur : ${error.code}`,
        text: error.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/user/settings");
    }
  } else if (dataObject.request === "passwordUpdate") {
    try {
      const response = await fetch(
        "http://localhost:8000/user/settings/password",
        {
          body: JSON.stringify(dataObject),
          method: request.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData?.token}`,
          },
        },
      );
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          title: `Erreur : ${response.status}`,
          text: data.message,
          icon: "error",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return redirect("/");
      }
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      return redirect("/user/settings/security");
    } catch (error) {
      Swal.fire({
        title: `Erreur : ${error.code}`,
        text: error.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      redirect("/user/settings/security");
    }
  } else if (dataObject.request === "signInOption") {
    if (dataObject.passwordSignIn === "no" && dataObject.otpSignIn === "no") {
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
      return redirect("/user/settings/security");
    }
    try {
      const response = await fetch(
        "http://localhost:8000/user/settings/signin",
        {
          body: JSON.stringify(dataObject),
          method: request.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData?.token}`,
          },
        },
      );
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          title: `Erreur : ${response.status}`,
          text: data.message,
          icon: "error",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return redirect("/");
      }
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      return redirect("/user/settings/security");
    } catch (error) {
      Swal.fire({
        title: `Erreur : ${error.code}`,
        text: error.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      redirect("/user/settings/security");
    }
  } else {
    try {
      const response = await fetch("http://localhost:8000/user/settings", {
        body: JSON.stringify(dataObject),
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData?.token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          title: `Erreur : ${response.status}`,
          text: data.message,
          icon: "error",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return redirect("/");
      }
      Swal.fire({
        title: "Changements enregistrés",
        text: data.message,
        icon: "success",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/user/settings");
    } catch (error) {
      Swal.fire({
        title: `Erreur : ${error.code}`,
        text: error.message,
        icon: "error",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect("/user/settings");
    }
  }
};
