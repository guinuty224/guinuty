import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserNavbar from "./userNavbar";
const EntrepreneurSettingsWrapper = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default EntrepreneurSettingsWrapper;
