import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PageHeader from "../CommonComponents/PageHeader";
import teamimage1 from "../../assets/Images/team1.jpg";
import teamimage2 from "../../assets/Images/team3.jpg";
import teamimage3 from "../../assets/Images/team4.jpg";

const MeatOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      role: "Project Manager",
      name: "Fardian Jabinsha",
      desc: "Printer took a galley of type and scrambled it to make a type specimenbook.",
      img: teamimage1,
    },
    {
      id: 2,
      role: "Senior Engineer",
      name: "Maria Johnson",
      desc: "Experienced in managing large construction projects with innovative solutions.",
      img: teamimage2,
    },
    {
      id: 3,
      role: "Architect",
      name: "David Smith",
      desc: "Passionate about modern designs that blend functionality with aesthetics.",
      img: teamimage3,
    },
  ];

  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleClick = (id) => {
    if (activeOverlay === id) {
      setActiveOverlay(null); // close if already open
    } else {
      setActiveOverlay(id);
    }
  };

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
              className="w-[350px] h-[550px] relative overflow-hidden rounded-12px group mx-auto cursor-pointer"
              onClick={() => handleClick(member.id)}
            >
              {/* Team Member Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover / Click Layer */}
              <div
                className={`
                  absolute inset-0 bg-text-Primary transition-opacity duration-500 flex flex-col items-center justify-center text-center px-6
                  ${activeOverlay === member.id ? "opacity-100" : "opacity-0"}
                  md:group-hover:opacity-100
                `}
              >
                <p className="text-lg mb-2 text-background">{member.role}</p>
                <h3 className="text-3xl font-semibold mb-4 text-text-White">
                  {member.name}
                </h3>
                <p className="text-sm mb-6 text-text-Secondary">
                  {member.desc}
                </p>

                {/* Social Icons */}
                <div className="flex space-x-4 text-text-White text-xl">
                  <div className="p-3 border border-text-White rounded-24px hover:bg-text-White hover:text-text-black transition">
                    <FaFacebookF />
                  </div>
                  <div className="p-3 border border-text-White rounded-24px hover:bg-text-White hover:text-text-black transition">
                    <FaTwitter />
                  </div>
                  <div className="p-3 border border-text-White rounded-24px hover:bg-text-White hover:text-text-black transition">
                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 border border-text-White rounded-24px hover:bg-text-White hover:text-text-black transition">
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
