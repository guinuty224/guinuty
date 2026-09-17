import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserNavbar from "./UserNavbar";
const EntrepreneurWrapper = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <Footer userAuth />
      <ScrollRestoration />
    </>
  );
};

export default EntrepreneurWrapper;
