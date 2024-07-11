import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <button className="transition-all duration-300 bg-[#f7c59f] w-full  min-w-8 max-w-44 py-3 flex justify-center text-black rounded-md shadow-lg shadow-black/40 mx-auto hover:bg-[#f7c59f]/60 max-sm:py-2">
      <FaWhatsapp className="w-7 h-7 max-sm:w-6 max-sm:h-6" />
    </button>
  );
}
