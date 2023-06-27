"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const categories = [
    {
        title: "Category",
        img: "https://picsum.photos/200"
    },
    {
        title: "Category",
        img: "https://picsum.photos/200"
    },
    {
        title: "Category",
        img: "https://picsum.photos/200"
    },
    {
        title: "Category",
        img: "https://picsum.photos/200"
    },
    {
        title: "Category",
        img: "https://picsum.photos/200"
    },
]

const Categories = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {
                categories.map(elem => {
                    return (
                        <SwiperSlide>
                            <img src={elem.img} alt="" />
                            <span>{elem.title}</span>
                        </SwiperSlide>
                    )
                })
            }
            ...
        </Swiper>
    )
}

export default Categories;