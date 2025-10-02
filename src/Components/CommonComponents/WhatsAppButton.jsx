import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/8801672226810?text=Hello!%20I%20want%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        {/* WhatsApp button */}
        <div className="flex items-center justify-center w-14 h-14 bg-custom-green rounded-full shadow-lg hover:bg-custom-green animate-pulse transition-all">
          <FaWhatsapp className="text-text-White text-3xl" />
        </div>

        {/* Popup number on hover */}
        <span className="absolute right-16 bg-custom-green text-text-White font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
          +880167226810
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
