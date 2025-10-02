import Logo from "../CommonComponents/Logo";
import mapPlaceholder from "../../assets/Images/contactMap.png";

// Data for social media links to keep the component clean and easy to manage.
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/79089363",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.481 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/business/hub/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.938 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.117.223.084.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.318.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook/stylemuseumltd",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <div className="bg-custom-dark-slate text-text-White font-sans py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex justify-center pb-5">
            <Logo />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">
            SUSTAINABLE FASHION, BETTER TOMORROW
          </h1>
          <a
            href="http://www.style-museum.com"
            className="text-2xl text-custom-red font-semibold tracking-wide"
          >
            www.style-museum.com
          </a>
        </header>

        {/* Main Content: Card and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side: Contact Card */}
          <div className="bg-custom-light-slate p-8 rounded-3xl shadow-lg">
            {/* Contact Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-2">Contact Details:</h2>
              <p className="text-text-SecondaryTwo text-lg">
                282/2DobadiaSignboard,Uttarkhan, <br />
                Dhaka-1230
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Social Media:</h2>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-text-SecondaryTwo hover:text-custom-link-red transition-colors"
                  >
                    <div className="text-custom-red mr-3">{link.icon}</div>
                    <span className="truncate">{link.url}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="rounded-12px">
            <img src={mapPlaceholder} alt="Location map" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
