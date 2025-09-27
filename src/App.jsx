import { useRef } from "react";
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
import WelcomeToStyleMuseum from "./Components/WelcomeToStyleMuseum/WelcomeToStyleMuseum";
import WhyWeAreBest from "./Components/WhyWeAreBest/WhyWeAreBest";
import AboutUS from "./Components/Pages/AboutUs/AboutUS";
import WhatsAppButton from "./Components/CommonComponents/WhatsAppButton";
import WeEnsureQualityMainPage from "./Components/CommonComponents/WeEnsureQualityMainPage";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const portfolio = useRef(null);

  // scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{
            homeRef,
            aboutRef,
            serviceRef,
            portfolio,
            blogRef,
            contactRef,
          }}
        />
      </div>

      {/* Home Section */}
      <div ref={homeRef} className="scroll-mt-20">
        <Banner />
      </div>
      <WeEnsureQualityMainPage />
      <WelcomeToStyleMuseum />
      <MakeThingEasy />
      <div ref={serviceRef} className="scroll-mt-20">
        <OurServices />
      </div>
      <div ref={portfolio} className="scroll-mt-20">
        <TopProjects />
      </div>

      <SuccessGlance />
      <Discover />
      <MeatOurTeam />
      <WhyWeAreBest />
      <ClientsFeadback />

      {/* About Section */}
      <div ref={aboutRef} className="scroll-mt-25">
        <AboutUS />
      </div>

      {/* Service Section */}
      {/* <div ref={serviceRef} className="scroll-mt-20">
        <ServiceDetails />
      </div> */}

      {/* Blog Section */}
      <div ref={blogRef} className="scroll-mt-20">
        <Blog />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="scroll-mt-20">
        <ContactUs />
      </div>
      <WhatsAppButton />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
