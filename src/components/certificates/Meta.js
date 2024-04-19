import { useEffect } from 'react'
import { intro, java, vers, htcs, react } from '../../assets/images/meta'


export default function Meta() {
    useEffect(
        () => {
            const swiperContainer = document.querySelector('swiper-container')
            // const swiperSlides = swiperContainer.querySelectorAll('swiper-slide')
            // const middle = Math.round(0 + (swiperSlides.length - 0) / 2) - 1;

            // console.log(swiperSlides.length)

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

            Object.assign(swiperContainer, swiperParams)

            swiperContainer.initialize()
        }, []
    )

    return (
        <>
            <swiper-container
                init='false'
            >
                <swiper-slide lazy='true'>
                    <img src={intro} alt="Intro" loading='lazy' />
                </swiper-slide>

                <swiper-slide lazy='true'>
                    <img src={java} alt="JavaScript" loading='lazy' />
                </swiper-slide>

                <swiper-slide lazy='true'>
                    <img src={vers} alt="Version Control" loading='lazy' />
                </swiper-slide>

                <swiper-slide lazy='true'>
                    <img src={htcs} alt="HTML and CSS depth" loading='lazy' />
                </swiper-slide>

                <swiper-slide lazy='true'>
                    <img src={react} alt="React Basics" loading='lazy' />
                </swiper-slide>
            </swiper-container>
        </>
    )
}
