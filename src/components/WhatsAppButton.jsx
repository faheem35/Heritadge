import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "971547472981"; 
  const message =
    "Hi Heritage, I would like to know more about your event management and exhibition services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 whatsapp-float hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}