"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
  {
    title: "Silla Corsair T1 RACE",
    description: "Ergonomía | Comodidad | Ajustabilidad",
    img: "/img/chair-corsair.jpeg",
    url: "/",
  },
  {
    title: "Auricular Redragon Lamia 2",
    description: "Calidad | Portabilidad | Aislamiento",
    img: "img/headphone-dragon.jpeg",
    url: "/",
  },
  {
    title: "Teclado Galax Stealth 03",
    description: "Sensibilidad | Comodidad | Ergonomía",
    img: "./img/keyboard-galax.jpeg",
    url: "/",
  },
  {
    title: "Mouse Logitech G502X",
    description: "Precisión | Durabilidad | Conectividad",
    img: "/img/mouse-logi.jpeg",
    url: "/",
  },
  {
    title: "Parlante Logitech Z607",
    description: "Conectividad | Potencia | Durabilidad",
    img: "/img/phone-speaker-logi.jpeg",
    url: "/",
  },
  {
    title: "Barra De Sonido Noblex 2.1",
    description: "Potencia | Estética | Calidad",
    img: "/img/phone-speaker-noblex.jpeg",
    url: "/",
  },
  {
    title: "Volante Logitech G29",
    description: "Sensibilidad | Durabilidad | Precisión",
    img: "/img/steering-wheel-logi.jpeg",
    url: "/",
  }
];

const BestSelling = () => {
  return (
    <section className="mt-16 sm:mt-32" id="best-selling">

      <h2 className="font-main font-bold text-3xl sm:text-5xl mb-10 text-center text-white">
        MÁS <span className="text-custome-primary">VENDIDOS</span> 
      </h2>

      <Swiper
        grabCursor
        centeredSlides
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow]}
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
              <SwiperSlide key={slide.title}
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}>
                  <div className="opacity-0 transition-opacity duration-700 delay-300 ease-in-out slide-content">
                    <h3 className="hidden font-main text-md sm:text-xl font-bold">{slide.title}</h3>
                    <p className="hidden text-sm sm:text-base">{slide.description}</p>
                    <button className="hidden border border-custome-secondary rounded-md bg-transparent w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-lg">
                      Ver
                    </button>
                  </div>
              </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination pb-20"></div>
      </Swiper>
    </section>
  );
};

export default BestSelling;
