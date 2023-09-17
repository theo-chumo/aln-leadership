import "./App.css";
import Header from "./ui/landing/Header";
import Welcome from "./ui/landing/Welcome";
import FeaturesSmall from "./ui/landing/FeaturesSmall";
import FeaturesBig from "./ui/landing/FeaturesBig";
import FeaturesBigRight from "./ui/landing/FeaturesBigRight";
import Parallax from "./ui/landing/Parallax";
import OurTeam from "./ui/landing/OurTeam";
import PricingPlans from "./ui/landing/PricingPlans";
import CounterParallax from "./ui/landing/CounterParallax";
import BlogSummary from "./ui/landing/BlogSummary";
import Footer from "./ui/landing/Footer";

import Cover from "./ui/about/Index";

function App() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
