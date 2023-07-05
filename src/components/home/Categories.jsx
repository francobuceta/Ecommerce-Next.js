"use client";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
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
    img: "img/mouse.jpg",
    url: "/",
  },
  {
    title: "Auriculares y micrófonos",
    img: "./img/headphone.jpg",
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
    title: "Cámaras Web",
    img: "/img/webcam.jpg",
    url: "/",
  },
  {
    title: "Volantes y Gamepads",
    img: "/img/joystick.jpg",
    url: "/",
  },
  {
    title: "Parlantes y Audio",
    img: "/img/phone-speaker.jpeg",
    url: "/",
  },
];

const Categories = () => {

  /* SwiperCore.use([Autoplay]); */

  return (
    <section className="mt-5">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{
          autoplay: 2000,
          speed: 100,
          disableOnInteraction: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categories.length > 0 ? (
          categories.map((elem) => (
            <SwiperSlide key={elem.title}>
              <Link href={elem.url}>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={elem.img}
                    alt={elem.title}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                  <span className="text-white uppercase">{elem.title}</span>
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
