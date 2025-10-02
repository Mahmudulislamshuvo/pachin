import { FaWhatsapp } from "react-icons/fa";

const WhatsApptwo = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/8801779666611?text=Hello!%20I%20want%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-custom-green hover:bg-custom-green text-text-White font-semibold px-4 py-2 rounded-full shadow-lg animate-bounce transition-all"
      >
        <FaWhatsapp className="text-2xl" />
        <span>Need us?</span>
      </a>
    </div>
  );
};

export default WhatsApptwo;
