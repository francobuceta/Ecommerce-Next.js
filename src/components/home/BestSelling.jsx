"use client";
import { bestSellingProducts } from "@/utils/BestSellingProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";

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
        slideToClickedSlide={true}
        centeredSlidesBounds={true}
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
          {bestSellingProducts.map((slide) => (
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
                <button
                  className="hidden border border-custome-secondary rounded-md bg-transparent w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-lg"
                  onClick={() => handleTransition(slide.url)}
                >
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
