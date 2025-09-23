import Breadcrumb from "../Common/Breadcrumb";
import layerImage from "../../../assets/Images/aboutusBredcrumb.jpg";

const ServiceDetails = ({ setPage }) => {
  return (
    <div>
      <Breadcrumb
        image={layerImage}
        title={"Service Details"}
        setPage={setPage}
      />
      {/*  */}
    </div>
  );
};

export default ServiceDetails;
