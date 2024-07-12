import Container from "../Container";
import SectionTextDecoration from "../SectionTextDecoration";
import SectionTitle from "../SectionTitle";
import menuData from "../../data/menuData";

export default function Menu() {
  return (
    <section
      id="menu"
      data-aos="fade-up"
      data-aos-delay="400"
      className="min-h-screen pt-36 max-sm:mt-40 max-sm:pt-10 mb-40 max-sm:-scroll-mt-10"
    >
      <Container>
        <div className="flex flex-col mt-20 gap-10 ">
          <SectionTextDecoration>Menu</SectionTextDecoration>
          <SectionTitle>Nossos melhores pratos</SectionTitle>
        </div>

        <ul className="relative grid grid-cols-2 gap-x-52 gap-y-20 mt-28 after:content-[''] after:h-full after:w-[2px] after:absolute after:bg-white/25 after:left-[50%] after:top-0 max-xl:gap-x-32 max-lg:gap-x-14 max-md:grid-cols-1 max-md:after:bg-transparent max-md:gap-y-12 ">
          {menuData.map((menu) => (
            <li
              key={menu.id}
              className="flex gap-5 items-center overflow-hidden rounded-md max-lg:items-start max-md:even:bg-black/40 max-md:even:rounded-lg max-md:px-3 max-md:py-2 max-md:shadow-sm max-md:shadow-black/70 max-sm:flex-col max-sm:items-center max-sm:gap-y-8"
            >
              <img
                src={menu.src}
                alt="Imagem de um alimento"
                className="transition-all duration-300 object-cover object-center w-24 h-24 rounded-md shadow-md shadow-black hover:scale-110 max-lg:w-16 max-lg:h-16 max-md:w-24 max-md:h-24 max-sm:w-full"
              />

              <div className="flex  flex-col gap-3 max-sm:gap-6">
                <div className="flex justify-between items-center">
                  <p className="font-semibold max-md:text-xl">{menu.name}</p>
                  <span className="text-[#f7c59f] font-medium text-lg">
                    {menu.pricing}
                  </span>
                </div>
                <span className="font-light max-lg:text-sm max-lg:leading-7 max-md:text-base max-md:leading-8 max-sm:leading-7 ">
                  {menu.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
