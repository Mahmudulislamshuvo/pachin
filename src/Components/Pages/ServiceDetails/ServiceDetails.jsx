import Breadcrumb from "../Common/Breadcrumb";

const ServiceDetails = ({ setPage }) => {
  return (
    <div>
      <Breadcrumb
        image={
          "https://images.pexels.com/photos/33660828/pexels-photo-33660828.jpeg"
        }
        title={"Service Details"}
        setPage={setPage}
      />
      {/*  */}
    </div>
  );
};

export default ServiceDetails;
