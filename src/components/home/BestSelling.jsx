"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
  "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg",
  "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg",
  "https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg",
  "https://i.postimg.cc/8Ck5BcmS/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg",
  "https://i.postimg.cc/66F8J9tr/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg",
  "https://i.postimg.cc/ydbzRYvv/joey-banks-YApi-Wyp0lqo-unsplash.jpg",
  "https://i.postimg.cc/NGKKzyqG/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg",
  "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg",
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
              <SwiperSlide key={slide}
                style={{
                  backgroundImage: `url(${slide})`,
                }}>
                  <div className="opacity-0 transition-opacity duration-700 delay-300 ease-in-out slide-content">
                    <h3 className="hidden font-main text-xl font-bold">TECLADO LOGITECH MK-200</h3>
                    <p className="hidden">Inalambrico | ANC | Confortable</p>
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
