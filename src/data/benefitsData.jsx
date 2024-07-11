import { LuChefHat } from "react-icons/lu";
import { FaEnvira } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineCelebration } from "react-icons/md";

const benefitsData = [
  {
    id: 1,
    title: "Comida Higienizada",
    text: "Garantimos a máxima higiene no preparo de todos os nossos pratos, para sua segurança e saúde.",
    icon: <IoRestaurantOutline className="w-12 text-[#f7c59f] h-12" />,
  },
  {
    id: 2,
    title: "Ambiente Refrescante",
    text: "Desfrute de um ambiente fresco e acolhedor, ideal para relaxar e apreciar sua refeição.",
    icon: <FaEnvira className="w-12 text-[#f7c59f] h-12" />,
  },
  {
    id: 3,
    title: "Chefs Habilidosos",
    text: "Nossos chefs são altamente qualificados e dedicados a oferecer pratos deliciosos e bem apresentados.",
    icon: <LuChefHat className="w-12 text-[#f7c59f] h-12" />,
  },
  {
    id: 4,
    title: "Festas e Eventos",
    text: "Organizamos festas e eventos especiais, proporcionando momentos inesquecíveis para você e seus convidados.",
    icon: <MdOutlineCelebration className="w-12 text-[#f7c59f] h-12" />,
  },
];

export default benefitsData;
