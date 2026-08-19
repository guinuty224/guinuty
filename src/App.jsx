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
import EntrepreneurDashboard from "./pages/EntrepreneurDasboard";
import EntrepreneurPersonalForm from "./pages/EntrepreneurPersonalForm";
import UserNavbar from "./components/userNavbar";
import EntrepreneurSecurityForm from "./pages/EntrepreneurSecurityForm";
import EntrepreneurNotificationForm from "./pages/EntrepreneurNotificationForm";
import EntrepreneurKYCForm from "./pages/EntrepreneurKYCForm";
import EntrepreneurRefund from "./pages/EntrepreneurRefund";
import EntrepreneurInvestors from "./pages/EntrepreneurInvestors";
import EntrepreneurUpdate from "./pages/EntrepreneurUpdate";
import InvestorDashboard from "./pages/InvestorDashboard";
import InvestorInvestments from "./pages/InvestorInvestments";
import InvestorRefund from "./pages/InvestorRefund";
import InvestorUpdate from "./pages/InvestorUpdate";
import InvestorPersonalForm from "./pages/InvestorPersonalForm";
import InvestorSecurityForm from "./pages/InvestorSecurityForm";
import InvestorNotificationForm from "./pages/InvestorNotificationForm";
import InvestorKYCForm from "./pages/InvestorKYCForm";

function App() {
  const [currentView, setCurrentView] = useState(0);
  return (
    <>
      {currentView <= 4 && <Navbar activeLink={currentView} />}

      {currentView >= 5 && <UserNavbar investor={currentView >= 14} />}
      {currentView == 0 && <Landing />}
      {currentView == 1 && <Projects />}
      {currentView == 2 && <HowItWorks />}
      {currentView == 3 && <AboutUs />}
      {currentView == 4 && <Project />}
      {currentView == 5 && <UploadProject />}
      {currentView == 6 && <EntrepreneurDashboard />}
      {currentView == 7 && <EntrepreneurPersonalForm />}
      {currentView == 8 && <EntrepreneurSecurityForm />}
      {currentView == 9 && <EntrepreneurNotificationForm />}
      {currentView == 10 && <EntrepreneurKYCForm />}
      {currentView == 11 && <EntrepreneurRefund />}
      {currentView == 12 && <EntrepreneurInvestors />}
      {currentView == 13 && <EntrepreneurUpdate />}
      {currentView == 14 && <InvestorDashboard />}
      {currentView == 15 && <InvestorInvestments />}
      {currentView == 16 && <InvestorRefund />}
      {currentView == 17 && <InvestorUpdate />}
      {currentView == 18 && <InvestorPersonalForm />}
      {currentView == 19 && <InvestorSecurityForm />}
      {currentView == 20 && <InvestorNotificationForm />}
      {currentView == 21 && <InvestorKYCForm />}
      <Footer
        userAuth={currentView > 4}
        onScreenChange={(id) => setCurrentView(id)}
      />
    </>
  );
}

export default App;
