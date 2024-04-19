import '../assets/styles/Certificates.css'
import { useState } from 'react'
import { intro, java, vers, htcs, react } from '../assets/images/meta'
import { register } from 'swiper/element/bundle'

register()

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

            <swiper-container
                space-between='10'
                slides-per-view='auto'
                centered-slides='true'
                pagination='true'
                loop='true'
            >
                <swiper-slide>
                    <img src={intro} alt="Intro" />
                </swiper-slide>
                <swiper-slide>
                    <img src={java} alt="JavaScript" />
                </swiper-slide>
                <swiper-slide>
                    <img src={vers} alt="Version Control" />
                </swiper-slide>
                <swiper-slide>
                    <img src={htcs} alt="HTML and CSS depth" />
                </swiper-slide>
                <swiper-slide>
                    <img src={react} alt="React Basics" />
                </swiper-slide>
            </swiper-container>






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