import Container from "../Container";
import wallpaper from "../../assets/imgs/special.png";
import SectionTextDecoration from "../SectionTextDecoration";
import SectionTitle from "../SectionTitle";
import SectionTextContent from "../SectionTextContent";
import WhatsappButton from "../WhatsappButton";

// import SectionTitle from "../SectionTitle";
// import SectionTextContent from "../SectionTextContent";

export default function Special() {
  return (
    <section className="relative mt-40 mb-40 min-h-screen flex  bg-black/40 max-md:mt- max-sm:flex-col-reverse max-sm:pb-20">
      <img
        src={wallpaper}
        alt="Imagem de um alimento"
        className="object-top object-cover min-h-full w-[50vw] max-sm:w-screen max-sm:mt-5 max-sm:h-60 max-sm:object-center max-sm:mx-auto"
      />
      <Container>
        <div className="flex flex-col mt-60 gap-20 max-sm:mt-20 max-sm:gap-10 max-sm:mb-10">
          <div className="flex flex-col gap-3 mb-10 max-xl:mb-0">
            <SectionTextDecoration>Prato Especial</SectionTextDecoration>
            <SectionTitle>Filé Mignon</SectionTitle>
          </div>
          <div className="px-20 flex flex-col gap-16 max-xl:px-0">
            <SectionTextContent>
              Suculento filé mignon grelhado ao ponto perfeito, servido com um
              rico e saboroso molho madeira. Acompanhado de legumes frescos e
              purê de batatas cremoso. Este prato é uma verdadeira experiência
              gastronômica que combina a maciez da carne com o sabor marcante do
              molho.
            </SectionTextContent>
            <div className="flex justify-center gap-4 font-light items-center">
              <span className="text-2xl opacity-70">R$60,00</span>

              <span className="font-normal text-4xl">R$45,00</span>
            </div>
          </div>

          <WhatsappButton />
        </div>
      </Container>
    </section>
  );
}
