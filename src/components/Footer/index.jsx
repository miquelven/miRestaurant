import Container from "../Container";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

import logo from "../../assets/imgs/logo.webp";

export default function Footer() {
  return (
    <footer className="pt-20 text-sm text-white/90">
      <Container>
        <div className="flex justify-center flex-col items-center gap-8 ">
          <ul className="flex items-center max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-7 max-md:grid-cols-1 max-lg:text-center ">
            <li className="pr-3 border-r-2 border-[#f7c59f] max-lg:leading-7 max-lg:border-transparent">
              <p>
                Rua das Flores 123. Bairro Jardim das Rosas. São Paulo - SP,
                01234-567
              </p>
            </li>
            <li className="px-3 border-r-2 border-[#f7c59f] max-lg:border-transparent max-lg:text-center">
              <p>contato@belezaexpress.com.br</p>
            </li>
            <li className="pl-3 max-lg:px-0 ">
              <p>(11) 91234-5678</p>
            </li>
          </ul>

          <img
            src={logo}
            alt="Imagem da logo"
            className="invert opacity-65  w-14 h-10 object-center object-fit my-5"
          />
          <ul className="flex  gap-5">
            <li className="bg-black/40 p-3 rounded-full hover:bg-black/50 cursor-pointer shadow-md shadow-black/80">
              <FaFacebookF className="w-5 h-5" />
            </li>
            <li className="bg-black/40 p-3 rounded-full hover:bg-black/50 cursor-pointer shadow-md shadow-black/80">
              <FaInstagram className="w-5 h-5" />
            </li>
            <li className="bg-black/40 p-3 rounded-full hover:bg-black/50 cursor-pointer shadow-md shadow-black/80">
              <FaTwitter className="w-5 h-5" />
            </li>
            <li className="bg-black/40 p-3 rounded-full hover:bg-black/50 cursor-pointer shadow-md shadow-black/80">
              <FaPinterestSquare className="w-5 h-5" />
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886417.1587472982!2d-49.551483000694844!3d-22.563819553877718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5816bd8d8141%3A0x5d0d75f524b1473a!2sRestaurante%20New%20York!5e0!3m2!1spt-PT!2sbr!4v1720784007549!5m2!1spt-PT!2sbr"
          allowfullscreen=""
          className="border-0 h-64 mt-10 w-full mx-auto max-sm:h-44"
          loading="lazy"
        ></iframe>
      </Container>

      <div className="mt-10 py-5 flex justify-center items-center border-t-2 border-white/45">
        <p>
          Desenvolvido por{" "}
          <span className="text-white font-semibold">Miquelven</span>
        </p>
      </div>
    </footer>
  );
}
