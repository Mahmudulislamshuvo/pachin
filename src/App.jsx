import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import ClientsFeadback from "./Components/ClientsFeadback/ClientsFeadback";
import ContactUs from "./Components/ContactUs/ContactUs";
import Discover from "./Components/Discover/Discover";
import MakeThingEasy from "./Components/MakeThingEasy/MakeThingEasy";
import MeatOurTeam from "./Components/MeetOurTeam/MeatOurTeam";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/ourServices/OurServices";
import SuccessGlance from "./Components/SuccessInaGlance/SuccessGlance";
import TopProjects from "./Components/TopProjects/TopProjects";
import WelcomeToPachin from "./Components/WelcomeToPachin/WelcomeToPachin";
import WhyWeAreBest from "./Components/WhyWeAreBest/WhyWeAreBest";

const App = () => {
  return (
    <div>
      {/* <div className="sticky top-0 z-50"></div> */}
      <Navbar />
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
    </div>
  );
};

export default App;
