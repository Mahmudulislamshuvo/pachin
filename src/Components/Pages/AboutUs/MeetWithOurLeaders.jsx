import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Assuming you have react-icons installed

const teamMembers = [
  {
    id: 1,
    name: "Monica Wagase",
    role: "Site Manager",
    image: "https://i.ibb.co/L5w2R72/team-member-1.jpg", // Placeholder image from the example
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Monica Wagase",
    role: "Site Manager",
    image: "https://i.ibb.co/Qn3Pz4N/team-member-2.jpg", // Placeholder image
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Monica Wagase",
    role: "Site Manager",
    image: "https://i.ibb.co/q7X6M0F/team-member-3.jpg", // Placeholder image
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Monica Wagase",
    role: "Site Manager",
    image: "https://i.ibb.co/3s3XfJ2/team-member-4.jpg", // Placeholder image
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const MeetWithOurLeaders = () => {
  return (
    <section className="bg-text-White py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-text-Secondary uppercase text-sm font-medium tracking-widest mb-2">
            TEAM MEMBERS
          </p>
          <h2 className="text-4xl font-bold text-text-Secondary">
            Meet With Our Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg hover:shadow-box-shadow transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-8px">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay for potential hover effects or info */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-lg font-semibold">{member.name}</p>
                </div> */}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-text-Secondary mb-1">
                  {member.name}
                </h3>
                <p className="text-background text-sm font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.facebook}
                    className="w-9 h-9 flex items-center justify-center bg-background/10 text-background rounded-full hover:bg-background hover:text-text-White transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-9 h-9 flex items-center justify-center bg-background/10 text-background rounded-full hover:bg-background hover:text-text-White transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="w-9 h-9 flex items-center justify-center bg-background/10 text-background rounded-full hover:bg-background hover:text-text-White transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-9 h-9 flex items-center justify-center bg-background/10 text-background rounded-full hover:bg-background hover:text-text-White transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetWithOurLeaders;
