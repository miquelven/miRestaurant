import wallpaper from "../../assets/imgs/reviewWallpaper.webp";
import reviewData from "../../data/reviewData";

import Slider from "react-slick";

export default function ReviewArea() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="1000"
      id="avaliacoes"
      className="relative z-0 min-h-screen flex flex-col justify-center items-center  bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 "></div>
      <div className="relative  z-20 mt-12 w-full max-sm:w-full ">
        <Slider {...settings} className="w-4/6 mx-auto py-14 max-md:py-0">
          {reviewData.map((review) => (
            <div key={review.id}>
              <p className="text-6xl text-center font-light leading-[76px] px-4 text-white/90  [text-shadow:_1px_3px_0_rgb(0_0_0_/_100%)] max-2xl:text-5xl max-lg:text-4xl max-sm:text-2xl max-sm:px-0">
                {review.review}
              </p>
              <div className="flex flex-col gap-4 items-center mt-28">
                <img
                  src={review.src}
                  alt="Imagem de uma pessoa"
                  className="object-cover object-center  w-24 h-24 rounded-full shadow-xl shadow-black max-sm:w-16 max-sm:h-16"
                />
                <span className="font-light text-lg max-sm:text-base">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
