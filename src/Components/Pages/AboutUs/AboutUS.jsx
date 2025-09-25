import Breadcrumb from "../Common/Breadcrumb";
import Footer from "../Common/Footer";
import HowWeWork from "./HowWeWork";
import MeetWithOurLeaders from "./MeetWithOurLeaders";
import SuccessCount from "./SuccessCount";
import Testimonial from "./Testimonial";
import TheBestReliable from "./TheBestReliable";
import WeEnsureQuality from "./WeEnsureQuality";
import image from "../../../assets/Images/aboutusBredcrumb.jpg";

const AboutUS = ({ setPage }) => {
  return (
    <div>
      <Breadcrumb image={image} title={"About Us"} setPage={setPage} />
      <TheBestReliable />
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
