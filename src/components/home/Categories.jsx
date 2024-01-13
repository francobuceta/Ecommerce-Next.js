"use client";
import { categories } from "@/utils/Categories";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const Categories = () => {
  return (
    <section className="mt-10 lg:mt-24 xl:mt-28 2xl:mt-32">
      <Swiper
        spaceBetween={0}
        modules={[Autoplay]}
        breakpoints={{
          250: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          autoplay: 2000,
          speed: 100,
          disableOnInteraction: true,
        }}
      >
        {categories.length > 0 ? (
          categories.map((elem) => (
            <SwiperSlide key={elem.title}>
              <Link href={elem.url}>
                <div className="flex flex-col items-center gap-5 pt-5">
                  <Image
                    src={elem.img}
                    alt={elem.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-cover outline outline-custome-primary outline-offset-8"
                  />
                  <span className="text-white text-center uppercase text-sm sm:text-xl lg:text-2xl">
                    {elem.title}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <p>No hay categorías disponibles.</p>
        )}
      </Swiper>
    </section>
  );
};

export default Categories;
