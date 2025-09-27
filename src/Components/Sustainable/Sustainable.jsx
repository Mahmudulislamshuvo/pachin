import image from "../../assets/Images/sustainableHeadingIcon.png";
import image2 from "../../assets/Images/sustainableHeadingIcon2.png";

const Sustainable = () => {
  return (
    <div className="container">
      <div>
        {/* Heading */}
        <div className="flex items-center gap-x-5">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="space-y-3">
            <div className="text-text-Primary font-bold text-5xl flex items-center gap-x-5">
              <h4>SUSTAINABLE AND</h4>
              <h4 className="text-background">RESPONSIBLE CHOICE</h4>
            </div>
            <h6 className="text-text-Secondary text-3xl">
              YOUR PATHWAY TOWARDS SUSTAINABILITY
            </h6>
          </div>
        </div>
        {/* Contents */}
        <div className="max-w-full mt-10">
          <img src={image2} alt="image2" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Sustainable;
