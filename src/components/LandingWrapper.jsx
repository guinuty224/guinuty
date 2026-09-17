import { Outlet, redirect, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import objectFromFormData from "../utils/objectFromFormData";
import validatePhoneNumber from "../utils/validatePhoneNumber";
import { errorToast, infoToast, successToast } from "../utils/toast";
import errorCodes from "../utils/errorCodes";
import setUserLocalData from "../utils/setLocalStorage";
import closeAllOffcanvas from "../utils/closeAllOffcanvas";
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

export const action = async ({ request, params }) => {
  const body = await objectFromFormData(request);

  const userPhoneNumber = validatePhoneNumber(body.phone);

  if (userPhoneNumber.isValid === false) {
    errorToast({
      code: errorCodes.invalidPhoneNumber,
      message: userPhoneNumber.reason,
    });
    return redirect("/");
  }
  switch (body.request) {
    case "signUp": {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/signup",
          {
            body: JSON.stringify(body),
            method: request.method,
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        if (!response.ok) {
          errorToast(data);
          return redirect(`/`);
        }
        infoToast(data);
        return { phone: data.phone };
      } catch (error) {
        errorToast(error);
        return redirect(`/`);
      }
    }
    case "reset": {
      return null;
    }
    default: {
      try {
        const response = await fetch(
          "https://guinuty-0aaf959abbbf.herokuapp.com/signin",
          {
            body: JSON.stringify(body),
            method: request.method,
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        if (!response.ok) {
          errorToast(data);
          return redirect(`/`);
        }
        if (data.phone) {
          infoToast(data);
          return { phone: data.phone };
        } else {
          setUserLocalData(data);
          closeAllOffcanvas();
          successToast(data);
          return redirect(`/dashboard`);
        }
      } catch (error) {
        errorToast(error);
        return redirect(`/`);
      }
    }
  }
};
