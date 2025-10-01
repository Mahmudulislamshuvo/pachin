import image1 from "../../assets/Images/companyOverview.png";

const CompanyOverview = () => {
  return (
    <div className="container">
      {/* Heading */}=
      <div className="space-y-3">
        <div className="text-text-Primary font-bold text-5xl flex items-center justify-center gap-x-5">
          <h4>COMPANY</h4>
          <h4 className="text-background">OVERVIEW</h4>
        </div>
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center gap-10 px-5 md:px-0">
        {/* left */}
        <div className="w-full lg:w-1/2">
          <div>
            <p className="text-justify">
              Style Museum Ltd., located at 282/2 Dobadia Signboard, Uttarkhan,
              Dhaka-1230, is a modern RMG facility led by its Managing Director,
              Mr. Mehedhi Hasan. The factory is built on over 25 decimals of
              land with a total floor space of 26,000 square feet across four
              floors, ensuring efficient and sustainable operations. Equipped
              with advanced safety systems including automatic fire detection,
              hydrant, and full CCTV coverage, along with a strong utility setup
              consisting of a 50 kVa generator, own sub-station, steam boiler,
              air compressor, and a 160 kg boiler, the factory maintains
              uninterrupted productivity. With a skilled workforce of more than
              300 employees, where 55% are women and 45% are men, Style Museum
              emphasizes inclusivity and employee well-being through daycare
              facilities featuring breastfeeding support, child nutrition, and
              play areas. While knitting and dyeing are subcontracted to reputed
              Oeko-tex and GOTS-certified mills, the factory houses its own
              digital and screen printing units, embroidery operations, and a
              well-equipped laboratory for wash tests, GSM tests, and
              composition tests. The facility also features a CAD system with
              plotters, three large cutting tables, modern sewing machines for
              knitwear and light woven products, a comprehensive finishing
              section with tumble dryers, thread suckers, and spot-removal
              units, and a secured packing division with needle detectors and
              pick-pack services. In addition, the company has its own
              transportation system to ensure smooth procurement and delivery
              processes, while BSCI certification is currently under process,
              reflecting its commitment to sustainable and ethical
              manufacturing.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={image1}
              alt="BestReliableSolution1"
              className="h-64 w-48 sm:h-80 sm:w-64 md:h-[400px] md:w-[320px] lg:h-[500px] lg:w-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
