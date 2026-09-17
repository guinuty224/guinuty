import "./App.css";
import Landing from "./pages/Landing";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import UserDashboard from "./pages/UserDasboard";
import EntrepreneurPersonalForm from "./pages/EntrepreneurPersonalForm";
import EntrepreneurSecurityForm from "./pages/EntrepreneurSecurityForm";
import EntrepreneurNotificationForm from "./pages/EntrepreneurNotificationForm";
import EntrepreneurKYCForm from "./pages/EntrepreneurKYCForm";
import EntrepreneurRefund from "./pages/EntrepreneurRefund";
import EntrepreneurInvestors from "./pages/EntrepreneurInvestors";
import EntrepreneurUpdate from "./pages/EntrepreneurUpdate";
import UploadProject from "./pages/UploadProject";
import { action as landingWrapperAction } from "./components/LandingWrapper";
import {
  loader as userLoader,
  action as userAction,
} from "./pages/UserDasboard";
import { loader as usersLoader } from "./pages/EntrepreneurKYCForm";
import { loader as userL } from "./pages/UserFile";
import { loader as editProjectLoader } from "./pages/EditProject";
import { loader as userProjectsLoader } from "./pages/UserProjects";
import UserProject, { loader as userProjectLoader } from "./pages/UserProject";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingWrapper from "./components/LandingWrapper";
import EntrepreneurSettingsWrapper from "./components/EntrepreneurSettingsWrapper";
import EntrepreneurWrapper from "./components/EntrepreneurWrapper";
import UserFile from "./pages/UserFile";
import EditProject from "./pages/EditProject";

import UserProjects from "./pages/UserProjects";

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
        loader: projectsLoader,
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
    path: "/dashboard",
    element: <EntrepreneurWrapper />,
    loader: userLoader,
    action: userAction,
    id: "root-data",
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
      {
        path: "projects",
        element: <UserProjects />,
        loader: userProjectsLoader,
      },
      {
        path: "project/add",
        element: <UploadProject />,
      },
      {
        path: "project/edit/:id",
        element: <EditProject />,
        loader: editProjectLoader,
      },
      {
        path: "project/:id",
        element: <UserProject />,
        loader: userProjectLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
