import { Outlet, redirect, ScrollRestoration } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";
const LandingWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default LandingWrapper;
function validatePhoneNumber(input) {
  if (typeof input !== "string") {
    return {
      isValid: false,
      reason: "L'entrée doit être une chaîne de caractères.",
    };
  }

  const trimmed = input.trim();
  const digitsOnly = trimmed.replace(/\D/g, ""); // Conserve uniquement les chiffres
  const hasPlusPrefix = trimmed.startsWith("+");

  // Vérification de la longueur standard E.164 (entre 7 et 15 chiffres)
  const isValidLength = digitsOnly.length >= 7 && digitsOnly.length <= 15;

  if (isValidLength) {
    if (hasPlusPrefix) {
      return { isValid: true, value: `+${digitsOnly}` };
    }
    return {
      isValid: false,
      reason:
        'Le numéro de téléphone doit inclure un indicatif pays commençant par "+".',
    };
  }

  return {
    isValid: false,
    reason: "Numéro de téléphone invalide.",
  };
}
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const dataObject = Object.fromEntries(formData);
  const validateValue = validatePhoneNumber(dataObject.phone);

  if (validateValue.isValid === false) {
    Swal.fire({
      title: `Erreur`,
      text: validateValue.reason,
      icon: "error",
      toast: true,
      position: "bottom-end",
      timer: 10000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    return redirect("/");
  }
  if (dataObject.otp) {
    try {
      const response = await fetch("http://localhost:8000/otp", {
        body: JSON.stringify(dataObject),
        method: request.method,
        headers: {
          "Content-Type": "application/json",
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
        return redirect(`/`);
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: data.userId,
          token: data.token,
          role: data.role,
        }),
      );
      const openOffcanvases = document.querySelectorAll(".offcanvas.show");
      openOffcanvases.forEach((element) => {
        if (window.bootstrap) {
          const instance =
            window.bootstrap.Offcanvas.getInstance(element) ||
            new window.bootstrap.Offcanvas(element);

          instance.hide();
        }
      });
      Swal.fire({
        title: "Connexion réussie !",
        text: "Votre session reste active et sécurisée pendant 1 heure.",
        icon: "success",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return redirect(`/user`);
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
      return redirect(`/`);
    }
  } else if (dataObject.fullname) {
    try {
      const response = await fetch("http://localhost:8000/signup", {
        body: JSON.stringify(dataObject),
        method: request.method,
        headers: {
          "Content-Type": "application/json",
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
        return redirect(`/`);
      }
      Swal.fire({
        title: "Code OTP",
        text: data.message,
        icon: "info",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return { phone: data.phone };
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
      return redirect(`/`);
    }
  } else {
    try {
      const response = await fetch("http://localhost:8000/signin", {
        body: JSON.stringify(dataObject),
        method: request.method,
        headers: {
          "Content-Type": "application/json",
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
        title: "Code OTP",
        text: data.message,
        icon: "info",
        toast: true,
        position: "bottom-end",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      if (data.phone) {
        return { phone: data.phone };
      } else {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: data.userId,
            token: data.token,
            role: data.role,
          }),
        );
        const openOffcanvases = document.querySelectorAll(".offcanvas.show");
        openOffcanvases.forEach((element) => {
          if (window.bootstrap) {
            const instance =
              window.bootstrap.Offcanvas.getInstance(element) ||
              new window.bootstrap.Offcanvas(element);

            instance.hide();
          }
        });
        Swal.fire({
          title: "Connexion réussie !",
          text: "Votre session reste active et sécurisée pendant 1 heure.",
          icon: "success",
          toast: true,
          position: "bottom-end",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return redirect(`/user`);
      }
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
      return redirect(`/`);
    }
  }
};
