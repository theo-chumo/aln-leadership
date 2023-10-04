// import Header from "./ui/landing/Header";
// import Welcome from "./ui/landing/Welcome";
// import FeaturesSmall from "./ui/landing/FeaturesSmall";
// import FeaturesBig from "./ui/landing/FeaturesBig";
// import FeaturesBigRight from "./ui/landing/FeaturesBigRight";
// import Parallax from "./ui/landing/Parallax";
// import OurTeam from "./ui/landing/OurTeam";
// import PricingPlans from "./ui/landing/PricingPlans";
// import CounterParallax from "./ui/landing/CounterParallax";
// import BlogSummary from "./ui/landing/BlogSummary";
// import Footer from "./ui/landing/Footer";

// import Cover from "./ui/about/Index";
import QuestionaireStart from "./questionaire/QuestionaireStart";
import DataProtectionNotice from "./questionaire/DataProtectionNotice";
import BusinessType from "./questionaire/BusinessType";
import ContactInformation from "./questionaire/ContactInformation";
import Employees from "./questionaire/Employees";
import Industry from "./questionaire/Industry";
import Turnover from "./questionaire/Turnover";
import Questionaire from "./Questionaire";
import TaxAssessmentChart from "./reports/TaxAssessmentChart"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuestionaireStart />}></Route>
        <Route path="dashboard" element={<Questionaire />} />
        <Route path="DataProtectionNotice" element={<DataProtectionNotice />} />
        <Route path="BusinessType" element={<BusinessType />} />
        <Route path="ContactInformation" element={<ContactInformation />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Industry" element={<Industry />} />
        <Route path="Turnover" element={<Turnover />} />
        <Route path="TaxAssessmentChart" element={<TaxAssessmentChart />} />
      </Routes>
      {/* <Header />
      <Welcome />
      <FeaturesSmall />
      <FeaturesBig />
      PricingPlans
      <FeaturesBigRight />
      <Parallax />
      <OurTeam />
      <PricingPlans />
      <CounterParallax />
      <BlogSummary />
      <Footer /> */}
    </div>
  );
}

export default App;
