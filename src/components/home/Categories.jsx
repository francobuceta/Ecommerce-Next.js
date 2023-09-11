"use client";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const categories = [
  {
    title: "Teclados",
    img: "/img/keyboard.jpg",
    url: "/",
  },
  {
    title: "Mouses",
    img: "/img/mouse.jpg",
    url: "/",
  },
  {
    title: "Auriculares y micrófonos",
    img: "/img/headphone.jpg",
    url: "/",
  },
  {
    title: "Sillas gamers",
    img: "/img/chair.jpg",
    url: "/",
  },
  {
    title: "Pads",
    img: "/img/pad.jpeg",
    url: "/",
  },
  {
    title: "Cámaras web",
    img: "/img/webcam.jpg",
    url: "/",
  },
  {
    title: "Volantes y gamepads",
    img: "/img/joystick.jpg",
    url: "/",
  },
  {
    title: "Parlantes y audio",
    img: "/img/phone-speaker.jpeg",
    url: "/",
  },
];

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
