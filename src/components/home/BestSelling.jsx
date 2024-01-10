"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
  {
    title: "Silla Corsair T1 RACE",
    description: "Ergonomía | Comodidad | Ajustabilidad",
    img: "/img/chair-corsair.jpeg",
    url: "/products/sillas-gamers/64f890650bd5acd883524805",
  },
  {
    title: "Auricular Redragon Lamia 2",
    description: "Calidad | Portabilidad | Aislamiento",
    img: "img/headphone-dragon.jpeg",
    url: "/products/auriculares-y-microfonos/64f7c12bee0d88d7c7f97c5d",
  },
  {
    title: "Teclado Galax Stealth 03",
    description: "Sensibilidad | Comodidad | Ergonomía",
    img: "./img/keyboard-galax.jpeg",
    url: "/products/teclados/64ac15033572bd5ec6b11df1",
  },
  {
    title: "Mouse Logitech G502X",
    description: "Precisión | Durabilidad | Conectividad",
    img: "/img/mouse-logi.jpeg",
    url: "/products/mouses/64ad759ce573e7d0f33f7004",
  },
  {
    title: "Parlante Logitech Z607",
    description: "Conectividad | Potencia | Durabilidad",
    img: "/img/phone-speaker-logi.jpeg",
    url: "/products/parlantes-y-audio/64f8f2f901810797d0ef4a5d",
  },
  {
    title: "Cámara IP Cloud Tp-Link Tapo C200",
    description: "Calidad | Seguridad | Conectividad",
    img: "/img/webcam-tp_link.jpeg",
    url: "/products/camaras-web/64f8988341d8910056d1c22a",
  },
  {
    title: "Volante Logitech G29",
    description: "Sensibilidad | Durabilidad | Precisión",
    img: "/img/steering-wheel-logi.jpeg",
    url: "/products/volantes-y-gamepads/64f8ec721d5ccc58436c5a16",
  },
];

const BestSelling = () => {
  const router = useRouter();

  //Redirection with transition to product detail.
  const handleTransition = (url) => {
    if (!document.startViewTransition) {
      router.push(url);
    }
    document.startViewTransition(() => {
      flushSync(() => router.push(url));
    });
  };

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
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.title}
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="opacity-0 transition-opacity duration-700 delay-300 ease-in-out slide-content">
                <h3 className="hidden font-main text-md sm:text-xl font-bold">
                  {slide.title}
                </h3>
                <p className="hidden text-sm sm:text-base">
                  {slide.description}
                </p>
                <button className="hidden border border-custome-secondary rounded-md bg-transparent w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-lg"
                  onClick={() => handleTransition(slide.url)}>
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
