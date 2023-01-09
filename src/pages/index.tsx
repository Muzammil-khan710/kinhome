import Banner from "../components/Banner";
import FeatureProjects from "../components/FeatureProjects";
import Footer from "../components/Footer";
import FreeQuote from "../components/FreeQuote";
import GetInTouch from "../components/GetInTouch";
import HappyCustomers from "../components/HappyCustomers";
import Header from "../components/Header";
import OurProcess from "../components/OurProcess";
import OurTeam from "../components/OurTeam";
import WhyComp from "../components/Why";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <WhyComp/>
      <OurProcess/>
      <HappyCustomers/>
      <FreeQuote/>
      <FeatureProjects/>
      <OurTeam/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}
