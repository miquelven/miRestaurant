import Container from "../Container";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import linksData from "../../data/linksData";
import { useEffect, useState } from "react";

import logo from "../../assets/imgs/logo.webp";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <header className="z-30 py-5 font-light fixed top-0 left-0 right-0  bg-transparent backdrop-blur-md">
      <Container>
        <div className=" text-sm flex  justify-between max-xl:flex-col max-xl:gap-7 max-md:hidden">
          <div className="flex gap-10  max-xl:justify-between">
            <p className="flex items-center gap-5">
              <span>
                <FaLocationDot />
              </span>
              Rua das Flores 123. Bairro Jardim das Rosas. São Paulo - SP,
              01234-567
            </p>

            <p className="flex items-center gap-5">
              <span>
                <FaClock />
              </span>
              8:00 - 22:00
            </p>
          </div>

          <div className="flex gap-10 max-xl:justify-between">
            <p className="flex items-center gap-5">
              <span>
                <FaPhoneAlt />
              </span>
              (11) 91234-5678
            </p>

            <p className="flex items-center gap-5">
              <span>
                <MdEmail />
              </span>
              contato@belezaexpress.com.br
            </p>
          </div>
        </div>
      </Container>
      <hr className="border-white/50 mt-5 max-md:hidden" />
      <Container>
        <div className="mt-8 flex justify-between max-xl:mt-5 max-md:mt-0">
          <a
            href="#"
            className={`relative 
            ${showMenu ? "z-0" : "z-30"}
            `}
          >
            <img
              src={logo}
              alt="Imagem da logo"
              className=" invert opacity-65  w-14 h-10 object-center object-fit"
            />
          </a>

          <nav className="relative">
            <ul
              className={`transition-all duration-500 flex max-md:fixed max-md:h-screen max-md:left-0 max-md:-top-[100vw] max-md:w-screen max-md:flex-col max-md:items-center max-md:z-20  max-md:py-5 max-sm:py-0 ${
                showMenu
                  ? "max-md:top-[0vw]  max-md:bg-[#0d0d0d] "
                  : "max-md:opacity-0 max-md:z-0"
              }`}
            >
              <img
                className="md:hidden mt-16 mb-10 max-sm:mt-5 invert opacity-65  w-14 h-10 object-center object-fit"
                src={logo}
                alt="Imagem da logo"
              />
              {linksData.map((link) => (
                <li
                  key={link.id}
                  className="pl-12 max-md:mt-10 max-md:pl-0 max-sm:mt-7"
                >
                  <span
                    onClick={() => setShowMenu(false)}
                    className=" relative transition-all duration-300 hover:text-[#f7c59f]  after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-[#f7c59f] hover:after:w-full after:transition-all after:duration-500 max-md:text-lg max-md:font-normal"
                  >
                    <a href={link.href}>{link.text}</a>
                  </span>
                </li>
              ))}
              <p className="md:hidden mt-20 text-3xl font-semibold mb-10 max-sm:mb-6 max-sm:text-lg">
                Faça uma Visita
              </p>
              <ul className="md:hidden flex flex-col gap-3 items-center max-sm:text-xs">
                <li>
                  <p className="px-32 text-center max-sm:px-3">
                    Rua das Flores 123. Bairro Jardim das Rosas. São Paulo - SP,
                    01234-567
                  </p>
                </li>
                <li>
                  <p>8:00 - 22:00</p>
                </li>

                <li>
                  <p>contato@belezaexpress.com.br</p>
                </li>
              </ul>

              <p className="md:hidden mt-16 text-2xl font-bold text-[#f7c59f] max-sm:text-lg max-sm:mt-7">
                (11) 91234-5678
              </p>
            </ul>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="hidden hover:scale-110 relative z-30 max-md:block "
            >
              {showMenu ? (
                <MdClose className="w-8 h-8" />
              ) : (
                <IoMenu className="w-8 h-8" />
              )}
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
