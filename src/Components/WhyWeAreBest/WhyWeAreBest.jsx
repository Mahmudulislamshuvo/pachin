import PageHeader from "../CommonComponents/PageHeader";
import { ImCheckmark } from "react-icons/im";

const WhyWeAreBest = () => {
  const mockData = [
    {
      id: 1,
      title: "Knowledge & Experience",
      desc: "Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry's standard.",
    },
    {
      id: 2,
      title: "Creative Solutions",
      desc: "We deliver innovative strategies and approaches tailored to your business needs.",
    },
    {
      id: 3,
      title: "Customer Focused",
      desc: "Our priority is to understand our clients and provide value-driven services.",
    },
    {
      id: 4,
      title: "Proven Results",
      desc: "Years of experience and numerous successful projects showcase our expertise.",
    },
    {
      id: 5,
      title: "Innovative Technology",
      desc: "We use the latest tools and technologies to ensure top-quality outcomes.",
    },
    {
      id: 6,
      title: "Trusted Partnerships",
      desc: "We build long-term relationships based on trust, transparency, and collaboration.",
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/31525648/pexels-photo-31525648.jpeg"
          alt="img"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-bannerLayer z-10">
          <div className="container">
            <div className="py-20">
              <div className="px-10 pb-10">
                <PageHeader
                  title="Why We Are The Best"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                  titlecss="text-text-White"
                  desccss="text-text-White"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap">
                  {mockData.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-5 p-5 w-1/2"
                    >
                      <div className="pt-2">
                        <ImCheckmark className="text-background h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-text-White text-2xl font-bold">
                          {item.title}
                        </h4>
                        <p className="text-text-White text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeAreBest;
