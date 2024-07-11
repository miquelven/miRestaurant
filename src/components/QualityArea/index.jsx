import Container from "../Container";
import SectionTextDecoration from "../SectionTextDecoration";
import SectionTitle from "../SectionTitle";
import SectionTextContent from "../SectionTextContent";
import wallpaper from "../../assets/imgs/quality.png";
import Slider from "react-slick";
import qualityData from "../../data/qualityData";

export default function QualityArea() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      className="relative z-0 h-screen flex flex-col pt-36  items-center  bg-no-repeat bg-center bg-cover max-md:mt-[600px] max-sm:pt-10 "
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 "></div>
      <Container>
        <div className="relative z-20 flex flex-col gap-24 max-sm:gap-20">
          <div className="px-60 flex flex-col gap-10 max-lg:px-40 max-md:px-20 max-sm:px-0">
            <div className="flex flex-col gap-2">
              <SectionTextDecoration>Alta Qualidade</SectionTextDecoration>
              <SectionTitle>Alimentos de alta qualidade</SectionTitle>
            </div>
            <SectionTextContent>
              Usamos ingredientes frescos e selecionados para criar pratos
              autênticos e saborosos. Nossa dedicação à qualidade garante uma
              experiência culinária excepcional em cada refeição.
            </SectionTextContent>
          </div>

          <ul className="relative grid grid-cols-3 max-sm:grid-cols-1">
            {qualityData.map((quality) => (
              <>
                <li
                  key={quality.id}
                  className="flex flex-col gap-5 max-sm:hidden"
                >
                  <img
                    src={quality.src}
                    alt="Imagem de uma comida"
                    className="object-center object-cover h-[360px] w-[360px] mx-auto shadow-md shadow-white/10 max-xl:h-[320px] max-xl:w-[320px] max-lg:h-[220px] max-lg:w-[220px] max-md:w-[180px] max-md:h-[180px]"
                  />
                  <div className=" items-center flex flex-col gap-5">
                    <h6 className="font-medium text-2xl max-lg:text-xl">
                      {quality.title}
                    </h6>
                    <span className="w-fit relative text-[#f7c59f] after:content-[''] after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#f7c59f] cursor-pointer after:absolute after:transition-all after:duration-300 hover:after:w-full max-lg:text-sm">
                      Ver Menu
                    </span>
                  </div>
                </li>
              </>
            ))}
            <Slider {...settings} className="hidden w-4/5 mx-auto max-sm:block">
              {qualityData.map((quality) => (
                <div key={quality.id} className="flex flex-col gap-5 ">
                  <img
                    src={quality.src}
                    alt="Imagem de uma comida"
                    className="object-center object-cover h-[140px] w-3/4 mx-auto shadow-md shadow-white/10"
                  />
                  <div className=" items-center flex flex-col gap-5 mt-10">
                    <h6 className="font-medium text-2xl">{quality.title}</h6>
                    <span className="w-fit relative text-[#f7c59f] text-base after:content-[''] after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#f7c59f] cursor-pointer after:absolute after:transition-all after:duration-300 hover:after:w-full ">
                      Ver Menu
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </ul>
        </div>
      </Container>
    </section>
  );
}
