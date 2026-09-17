import { useLoaderData, Link } from "react-router-dom";
import Button from "../components/Button";
import styles from "./EntrepreneurKYCForm.module.css";

const EntrepreneurKYCForm = () => {
  const today = new Date();
  const loaderData = useLoaderData();
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
        <h1 className="textMainGreen fw-bold">KYC</h1>
        <p>Ici, vous pouvez voir la liste de vos utilisateurs.</p>
        <hr />
        <div className="container bg-light p-3 rounded border">
          <div class="table-responsive">
            <table class="table">
              <thead className="">
                <tr>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🏷️ Tel</span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">
                      📋 Nom complet
                    </span>
                  </th>
                  <th scope="col">
                    <span className="fw-bold textMainGreen">🚦 Role</span>
                  </th>

                  <th scope="col">
                    <span className="fw-bold textMainGreen">🛠️ Fiche</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {loaderData.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{user.phone}</th>
                    <td>{user.fullname}</td>
                    <td>{user.role}</td>

                    <td>
                      <Link to={user._id}>
                        <Button padding="px-2" type="submit">
                          Voir la fiche
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EntrepreneurKYCForm;
export const loader = async ({ request, params }) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  if (!userData) {
    return redirect("/");
  }
  try {
    const response = await fetch(
      "https://guinuty-0aaf959abbbf.herokuapp.com/user/users",
      {
        method: "GET",
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
    return data;
  } catch (error) {
    console.log(error);
  }
};
