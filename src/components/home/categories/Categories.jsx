"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';

const categories = [
    {
        title: "Teclados",
        img: "https://picsum.photos/200",
        url: "/"
    },
    {
        title: "Mouses",
        img: "https://picsum.photos/200",
        url: "/"
    },
    {
        title: "Auriculares",
        img: "https://picsum.photos/200",
        url: "/"
    },
    {
        title: "Pads",
        img: "https://picsum.photos/200",
        url: "/"
    },
    {
        title: "Cámaras Web",
        img: "https://picsum.photos/200",
        url: "/"
    },
    {
        title: "Volantes y Gamepads",
        img: "https://picsum.photos/200",
        url: "/"
    },
    {
        title: "Parlantes y Audio",
        img: "https://picsum.photos/200",
        url: "/"
    },
]

const Categories = () => {
    return (
        <section className='mt-5'>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    categories.map(elem => {
                        return (
                            <SwiperSlide>
                                <Link href={elem.url}>
                                    <div className='flex flex-col items-center gap-3'>
                                        <img src={elem.img} alt={elem.title} className="rounded-full w-[200px]" />
                                        <span>{elem.title}</span>
                                    </div>
                                </Link>
                            </SwiperSlide> 
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Categories;