import Banner from "./Components/Banner/Banner";
import Discover from "./Components/Discover/Discover";
import MakeThingEasy from "./Components/MakeThingEasy/MakeThingEasy";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/ourServices/OurServices";
import SuccessGlance from "./Components/SuccessInaGlance/SuccessGlance";
import TopProjects from "./Components/TopProjects/TopProjects";
import WelcomeToPachin from "./Components/WelcomeToPachin/WelcomeToPachin";

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
    </div>
  );
};

export default App;
