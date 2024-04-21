import { useEffect, useRef } from 'react'
import { excel } from '../../assets/images/microsoft'
import swiperStyle from '../../assets/styles/certificates/Swiper.module.css'

export default function Microsoft() {
    const swiperContainer = useRef(null)

    useEffect(
        () => {
            const swiperParams = {
                initialSlide: 0,
                autoplay: {
                    delay: 10000
                },
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
                loop: false,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 15,
                    slideShadows: false,
                    scale: 0.9,
                    stretch: 80,
                    depth: 100,
                    modifier: 1.5,
                },
                grabCursor: true,

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                },
                on: {
                    init() {

                    }
                },
            }

            Object.assign(swiperContainer.current, swiperParams)

            swiperContainer.current.initialize()
        }, []
    )

    return (
        <>
            <swiper-container
                init='false'
                ref={swiperContainer}
            >
                <swiper-slide lazy='true'>
                    <img src={excel} alt="Intro" loading='lazy' className={swiperStyle.img} />
                </swiper-slide>
            </swiper-container>
        </>
    )
}