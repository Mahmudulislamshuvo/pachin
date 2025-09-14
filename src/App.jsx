import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import ClientsFeadback from "./Components/ClientsFeadback/ClientsFeadback";
import ContactUs from "./Components/ContactUs/ContactUs";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/Footer/Footer";
import MakeThingEasy from "./Components/WeMakeThingEasy/MakeThingEasy";
import MeatOurTeam from "./Components/MeetOurTeam/MeatOurTeam";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/ourServices/OurServices";
import SuccessGlance from "./Components/SuccessInaGlance/SuccessGlance";
import TopProjects from "./Components/TopProjects/TopProjects";
import WelcomeToPachin from "./Components/WelcomeToPachin/WelcomeToPachin";
import WhyWeAreBest from "./Components/WhyWeAreBest/WhyWeAreBest";
import AboutUS from "./Components/Pages/AboutUs/AboutUS";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar setPage={setPage} />
      </div>

      {page === "home" && (
        <>
          <Banner />
          <WelcomeToPachin />
          <MakeThingEasy />
          <OurServices />
          <TopProjects />
          <SuccessGlance />
          <Discover />
          <MeatOurTeam />
          <WhyWeAreBest />
          <ContactUs />
          <ClientsFeadback />
          <Blog />
        </>
      )}

      {page === "aboutus" && <AboutUS setPage={setPage} />}
      {page === "services" && <OurServices />}
      {page === "projects" && <TopProjects />}
      {page === "contact" && <ContactUs />}
      <Footer />
    </div>
  );
};

export default App;
