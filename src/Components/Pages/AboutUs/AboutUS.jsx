import Breadcrumb from "../Common/Breadcrumb";
import Footer from "../Common/Footer";
import HowWeWork from "./HowWeWork";
import MeetWithOurLeaders from "./MeetWithOurLeaders";
import SuccessCount from "./SuccessCount";
import Testimonial from "./Testimonial";
import TheBestReliable from "./SafeWorkEnvironment";
import WeEnsureQuality from "./WeEnsureQuality";
import image from "../../../assets/Images/aboutusBredcrumb.jpg";
import SafeWorkEnvironment from "./SafeWorkEnvironment";

const AboutUS = ({ setPage }) => {
  return (
    <div>
      <Breadcrumb image={image} title={"About Us"} setPage={setPage} />
      <SafeWorkEnvironment />
      <WeEnsureQuality />
      {/* <SuccessCount /> */}
      <HowWeWork />
      {/* <Testimonial /> */}
      {/* <MeetWithOurLeaders /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUS;
