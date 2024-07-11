import Container from "../Container";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-20 text-sm text-white/90">
      <Container>
        <div className="flex justify-center flex-col items-center gap-8 ">
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
          <h1>logo</h1>
          <ul className="grid grid-cols-3  items-center max-lg:grid-cols-2 max-lg:gap-y-7 max-md:grid-cols-1 max-lg:text-center">
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
        </div>
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
