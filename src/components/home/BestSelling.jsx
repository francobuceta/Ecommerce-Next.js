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
    <section className="pb-32 mt-32">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={3}
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
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
                    <h3 className="hidden font-main text-xl font-bold">{slide.title}</h3>
                    <p className="hidden">{slide.description}</p>
                    <button className="hidden btn btn-outline w-20 text-lg">Ver</button>
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
