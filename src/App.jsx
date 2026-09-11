import "./App.css";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import UploadProject from "./pages/UploadProject";
import UserDashboard from "./pages/UserDasboard";
import EntrepreneurPersonalForm from "./pages/EntrepreneurPersonalForm";
import UserNavbar from "./components/userNavbar";
import EntrepreneurSecurityForm from "./pages/EntrepreneurSecurityForm";
import EntrepreneurNotificationForm from "./pages/EntrepreneurNotificationForm";
import EntrepreneurKYCForm from "./pages/EntrepreneurKYCForm";
import EntrepreneurRefund from "./pages/EntrepreneurRefund";
import EntrepreneurInvestors from "./pages/EntrepreneurInvestors";
import EntrepreneurUpdate from "./pages/EntrepreneurUpdate";

import { action as landingWrapperAction } from "./components/LandingWrapper";
import {
  loader as userLoader,
  action as userAction,
} from "./pages/UserDasboard";
import { loader as usersLoader } from "./pages/EntrepreneurKYCForm";
import { loader as userL } from "./pages/UserFile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingWrapper from "./components/LandingWrapper";
import EntrepreneurSettingsWrapper from "./components/EntrepreneurSettingsWrapper";
import EntrepreneurWrapper from "./components/EntrepreneurWrapper";
import UserFile from "./pages/UserFile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingWrapper />,
    action: landingWrapperAction,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "steps",
        element: <HowItWorks />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/user",
    element: <EntrepreneurWrapper />,
    loader: userLoader,
    id: "root-data",
    action: userAction,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "investors",
        element: <EntrepreneurInvestors />,
      },
      {
        path: "refunds",
        element: <EntrepreneurRefund />,
      },
      {
        path: "updates",
        element: <EntrepreneurUpdate />,
      },
      {
        path: "users",
        element: <EntrepreneurKYCForm />,
        loader: usersLoader,
      },
      {
        path: "users/:id",
        element: <UserFile />,
        loader: userL,
      },
      {
        path: "settings",
        element: <EntrepreneurSettingsWrapper />,
        children: [
          {
            index: true,
            element: <EntrepreneurPersonalForm />,
          },
          {
            path: "notifications",
            element: <EntrepreneurNotificationForm />,
          },
          {
            path: "security",
            element: <EntrepreneurSecurityForm />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     {currentView <= 4 && <Navbar activeLink={currentView} />}

  //     {currentView >= 5 && <UserNavbar investor={currentView >= 14} />}
  //     {currentView == 0 && <Landing />}
  //     {currentView == 1 && <Projects />}
  //     {currentView == 2 && <HowItWorks />}
  //     {currentView == 3 && <AboutUs />}
  //     {currentView == 4 && <Project />}
  //     {currentView == 5 && <UploadProject />}
  //     {currentView == 6 && <EntrepreneurDashboard />}
  //     {currentView == 7 && <EntrepreneurPersonalForm />}
  //     {currentView == 8 && <EntrepreneurSecurityForm />}
  //     {currentView == 9 && <EntrepreneurNotificationForm />}
  //     {currentView == 10 && <EntrepreneurKYCForm />}
  //     {currentView == 11 && <EntrepreneurRefund />}
  //     {currentView == 12 && <EntrepreneurInvestors />}
  //     {currentView == 13 && <EntrepreneurUpdate />}
  //     {currentView == 14 && <InvestorDashboard />}
  //     {currentView == 15 && <InvestorInvestments />}
  //     {currentView == 16 && <InvestorRefund />}
  //     {currentView == 17 && <InvestorUpdate />}
  //     {currentView == 18 && <InvestorPersonalForm />}
  //     {currentView == 19 && <InvestorSecurityForm />}
  //     {currentView == 20 && <InvestorNotificationForm />}
  //     {currentView == 21 && <InvestorKYCForm />}
  //     <Footer
  //       userAuth={currentView > 4}
  //       onScreenChange={(id) => setCurrentView(id)}
  //     />
  //   </>
  // );
}

export default App;
