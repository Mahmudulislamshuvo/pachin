import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PageHeader from "../CommonComponents/PageHeader";

const MeatOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      role: "Project Manager",
      name: "Fardian Jabinsha",
      desc: "Printer took a galley of type and scrambled it to make a type specimenbook.",
      img: "https://images.pexels.com/photos/32947545/pexels-photo-32947545.jpeg",
    },
    {
      id: 2,
      role: "Senior Engineer",
      name: "Maria Johnson",
      desc: "Experienced in managing large construction projects with innovative solutions.",
      img: "https://images.pexels.com/photos/32947545/pexels-photo-32947545.jpeg", // same image for demo
    },
    {
      id: 3,
      role: "Architect",
      name: "David Smith",
      desc: "Passionate about modern designs that blend functionality with aesthetics.",
      img: "https://images.pexels.com/photos/32947545/pexels-photo-32947545.jpeg", // same image for demo
    },
  ];

  return (
    <div className="container">
      <div className="py-20">
        <div className="pb-10">
          <PageHeader
            title="Meet with Our Team"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
        </div>

        {/* Team Card */}
        <div className="md:flex md:gap-5 md:justify-between md:items-center space-y-5 md:space-y-0">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-[350px] h-[550px] relative overflow-hidden rounded-xl group mx-auto"
            >
              {/* Team Member Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Layer */}
              <div className="absolute inset-0 bg-text-Primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-6">
                <p className="text-lg mb-2 text-background">{member.role}</p>
                <h3 className="text-3xl font-semibold mb-4 text-text-White">
                  {member.name}
                </h3>
                <p className="text-sm mb-6 text-text-Secondary">
                  {member.desc}
                </p>

                {/* Social Icons */}
                <div className="flex space-x-4 text-text-White text-xl">
                  <div className="p-3 border border-text-White rounded-full hover:bg-text-White hover:text-text-black transition">
                    <FaFacebookF />
                  </div>
                  <div className="p-3 border border-text-White rounded-full hover:bg-text-White hover:text-text-black transition">
                    <FaTwitter />
                  </div>
                  <div className="p-3 border border-text-White rounded-full hover:bg-text-White hover:text-text-black transition">
                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 border border-text-White rounded-full hover:bg-text-White hover:text-text-black transition">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeatOurTeam;
