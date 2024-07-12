import Container from "../Container";
import bannerImg from "../../assets/imgs/banner.png";

export default function Banner() {
  return (
    <main
      className="relative z-0 h-screen flex flex-col justify-center items-center  bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 "></div>
      <Container>
        <div className="relative z-20 flex flex-col justify-center items-center gap-10 max-md:gap-16">
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-8xl font-bold  text-center [text-shadow:_1px_3px_0_rgb(0_0_0_/_100%)] max-lg:text-7xl max-sm:text-5xl"
          >
            Descubra Sabores Inesquecíveis!
          </h1>
          <h2
            data-aos="zoom-in"
            data-aos-delay="800"
            className="font-medium text-center text-2xl [text-shadow:_1px_2px_0_rgb(0_0_0_/_100%)] max-lg:text-xl max-sm:text-lg"
          >
            Venha com a sua familia e experimente uma comida deliciosa
          </h2>
        </div>
      </Container>
    </main>
  );
}
