import '../assets/styles/Certificates.css'
import { useState } from 'react'
import { intro, java, vers, htcs, react } from '../assets/images/meta'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


let Cisco = () => {
    return (
        <>
            <h1>Cisco</h1>
        </>
    )
}

let Meta = () => {
    return (
        <>
            <h1>Meta</h1>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src={intro} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={java} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={vers} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={htcs} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} alt='Certificate' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} alt='Certificate' />
                </SwiperSlide>
            </Swiper>






            {/* <div className='wrapper'>
                <div className='carousel'>
                    <img className='cert-img' src={intro} alt='Certificate' />
                    <img className='cert-img' src={java} alt='Certificate' />
                    <img className='cert-img' src={vers} alt='Certificate' />
                    <img className='cert-img' src={htcs} alt='Certificate' />
                    <img className='cert-img' src={react} alt='Certificate' />
                    <img className='cert-img' src={vers} alt='Certificate' />
                    <img className='cert-img' src={htcs} alt='Certificate' />
                    <img className='cert-img' src={react} alt='Certificate' />
                </div>
            </div> */}
        </>
    )
}

let Microsoft = () => {
    return (
        <h1>Microsoft</h1>
    )
}

let Certificates = () => {
    const [cert, setCert] = useState('meta')

    const checkedHandler = (e) => {
        setCert(e.target.value)
    }

    const switchCarousel = (val) => {
        switch (val) {
            case 'cisco':
                return <Cisco />
            case 'micro':
                return <Microsoft />
            default:
                return <Meta />
        }
    }

    return (
        <main>
            <h1>Certificates page</h1>
            <ul className='d-flex 
            flex-row 
            justify-content-center 
            align-items-end
            flex-wrap'>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert1'
                        value='cisco'
                        onChange={checkedHandler}
                    />
                    <label htmlFor="cert1">
                        Cybersecurity Certificate
                    </label>
                </li>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert2'
                        value='meta'
                        defaultChecked
                        onChange={checkedHandler}
                    />
                    <label htmlFor="cert2">
                        Meta Professional Certificate
                    </label>
                </li>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert3'
                        value='micro'
                        onChange={checkedHandler}
                    />
                    <label htmlFor="cert3">
                        Microsoft Excel Certificate
                    </label>
                </li>
            </ul>

            {switchCarousel(cert)}
        </main>
    )
}

export default Certificates;