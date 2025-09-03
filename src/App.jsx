import Banner from "./Components/Banner/Banner";
import MakeThingEasy from "./Components/MakeThingEasy/MakeThingEasy";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/ourServices/OurServices";
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
    </div>
  );
};

export default App;
