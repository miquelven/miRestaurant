import Container from "../Container";
import restaurant from "../../assets/imgs/restaurant.png";
import chef from "../../assets/imgs/chef.png";
import WhatsappButton from "../WhatsappButton";
import SectionTextDecoration from "../SectionTextDecoration";
import SectionTitle from "../SectionTitle";
import SectionTextContent from "../SectionTextContent";

export default function About() {
  return (
    <section
      id="sobre"
      className="my-96 max-md:my-60 scroll-mt-60 max-sm:scroll-mt-32"
    >
      <Container>
        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-xl:gap-44 max-lg:gap-10 max-md:flex max-md:flex-col max-md:gap-16">
          <div>
            <SectionTextDecoration>Nossa história</SectionTextDecoration>

            <div className="flex flex-col  gap-10 my-10 max-sm:mt-6">
              <SectionTitle>Cada sabor conta uma história</SectionTitle>

              <SectionTextContent>
                No MiRestaurante, a nossa missão é proporcionar uma experiência
                gastronômica inesquecível. Com um ambiente acolhedor e pratos
                preparados com ingredientes frescos e de alta qualidade,
                oferecemos uma combinação perfeita de sabores tradicionais e
                contemporâneos. Venha nos visitar e desfrute de uma refeição que
                vai além do paladar!
              </SectionTextContent>
            </div>

            <WhatsappButton />
          </div>

          <div className="relative col-span-2 max-xl:col-span-1">
            <img
              src={restaurant}
              alt="Imagem do restaurante"
              className="object-cover object-center absolute top-0 right-0 w-[650px] h-[550px] shadow-lg shadow-black/30 max-2xl:w-[550px] max-2xl:h-[450px] max-xl:w-[450px] max-xl:h-[350px] max-lg:w-[550px] max-lg:h-[450px] max-md:block max-md:w-full"
            />
            <img
              src={chef}
              alt="Imagem do chef"
              className="object-cover object-center absolute top-[400px] right-[475px] z-10 w-[350px] h-[300px] shadow-lg shadow-black/30 max-2xl:w-[250px] max-2xl:h-[200px] max-2xl:top-[350px] max-xl:top-[250px] max-xl:right-[300px] max-lg:w-[200px] max-lg:h-[150px] max-lg:right-[125px] max-lg:top-[375px] max-md:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
