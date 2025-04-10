import projectStyle from '../assets/styles/Projects.module.css'
import { animated, useSpring, config, useInView } from '@react-spring/web'
import { ls1, ls2, ls3, ls4, ls5, ls6, ls7 } from '../assets/images/about'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, Autoplay, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'


let Projects = () => {
    return (
        <>
            {/* <h1>Projects page</h1> */}
            <main className={projectStyle.mainContainer}>
                {/* Introduction Container */}
                <section className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Intro Desc */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                        {/* About Me, About Portfolio */}
                        <section className={`
                        d-flex
                        flex-row
                        justify-content-center
                        align-items-center
                        pt-4 ${projectStyle.gap}
                        `}>
                            {/* About Me */}
                            <article className={`
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>About Me</h2>
                                <p className={projectStyle.p}>
                                    I am an Electronics Engineer graduated at Mapúa Malayan Colleges Laguna who is
                                    passionate about Software Engineering and eager to provide solutions to complex
                                    problems through digital solutions.
                                </p>
                            </article>
                            {/* About Portfolio */}
                            <article className={`
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>About Portfolio</h2>
                                <p className={projectStyle.p}>
                                    These projects reflect a combination of fields I am passionate about,
                                    such as software development, web development, deep learning, data analysis,
                                    signal processing, and hardware design.
                                </p>
                            </article>
                        </section>
                    </article>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls2} alt="" className={projectStyle.ls1} />
                    </div>
                </section>

                {/* My Mission */}
                <section className={`
                d-flex
                flex-row
                flex-wrap
                justify-content-center
                align-items-center pt-5
                `}>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls1} alt="" className={projectStyle.ls1} />
                    </div>
                    
                    {/* My Mission */}
                    <section className={`
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-start
                    p-4 ${projectStyle.mainSecContainer} gap-2
                    `}>
                        <h1 className={projectStyle.h1}>My Mission</h1>
                        <article className={`
                        d-flex
                        flex-row
                        justify-content-center
                        align-items-center ${projectStyle.gap}
                        `}>
                            <h1 className={projectStyle.h1}>1</h1>
                            <p className={projectStyle.p}>
                                Help individuals solve their complex problems by providing them 
                                with digital solutions through innovation, automation, and advancement.
                            </p>
                        </article>
                        <article className={`
                        d-flex
                        flex-row
                        justify-content-center
                        align-items-center ${projectStyle.gap}
                        `}>
                            <h1 className={projectStyle.h1}>2</h1>
                            <p className={projectStyle.p}>
                                Provide visually appealing, user-friendly, and highly interactive software 
                                and web development for users to benefit from.
                            </p>
                        </article>
                        <article className={`
                        d-flex
                        flex-row
                        justify-content-center
                        align-items-center ${projectStyle.gap}
                        `}>
                            <h1 className={projectStyle.h1}>3</h1>
                            <p className={projectStyle.p}>
                                Enable businesses and individuals to bridge data and technology
                                successfully to maximize efficiency, growth and success.
                            </p>
                        </article>
                    </section>
                </section>

                {/* My Projects */}
                <div className={`
                d-flex
                flex-row
                justify-content-center
                align-items-center
                rounded
                `} style={{
                    backgroundColor: 'skyblue',
                    marginBottom: '100px', 
                    marginTop: '100px', 
                    paddingTop: '100px',
                    paddingBottom: '100px',
                    boxShadow: '0px 0px 35px rgba(255, 255, 255, 0.5)'
                }}>
                    <h1 className={projectStyle.h1p}>My Projects</h1>
                </div>

                {/* Carousel Images of the Projects */}
                <Swiper 
                modules={[FreeMode, Autoplay, EffectCoverflow, Pagination]}
                // autoplay={{delay: 1000}}
                centeredSlides={true}
                slidesPerView={5}
                spaceBetween={1}
                loop={true}
                pagination={{clickable: true}}
                effect='coverflow'
                coverflowEffect={{
                    rotate: 0,
                    stretch: 100,
                    depth: 50,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                grabCursor={true}
                className={projectStyle.projectSwiper}
                >
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls7} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls5} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls6} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls7} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls5} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls6} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={`${projectStyle.swiperSlide}`}>
                        <img src={ls5} alt=""/>
                    </SwiperSlide>
                </Swiper>

                {/* 1st Project */}
                <section className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls2} alt="" className={projectStyle.ls1} />
                    </div>
                </section>

                {/* 2nd Project */}
                <section className={`
                d-flex
                flex-row
                flex-wrap
                justify-content-center
                align-items-center pt-5
                `}>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls1} alt="" className={projectStyle.ls1} />
                    </div>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                </section>

                {/* 3rd Project */}
                <section className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls2} alt="" className={projectStyle.ls1} />
                    </div>
                </section>

                {/* 4th Project */}
                <section className={`
                d-flex
                flex-row
                flex-wrap
                justify-content-center
                align-items-center pt-5
                `}>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls1} alt="" className={projectStyle.ls1} />
                    </div>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                </section>

                {/* 5th Project */}
                <section className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls2} alt="" className={projectStyle.ls1} />
                    </div>
                </section>

                {/* 6th Project */}
                <section className={`
                d-flex
                flex-row
                flex-wrap
                justify-content-center
                align-items-center pt-5
                `}>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls1} alt="" className={projectStyle.ls1} />
                    </div>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                </section>

                {/* 7th Project */}
                <section className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Description */}
                    <article className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Introduction</h1>
                        <p className={projectStyle.p}>
                            We now live in a world where the digital
                            landscape is rapidly evolving. As technology
                            continues to advance, our world becomes more
                            interconnected, creating endless opportunities
                            for growth and transformation. In this dynamic
                            environment, I am proud to present my portfolio,
                            a testament to my journey in harnessing the power
                            of digital solutions to encourage advancements
                            and make an impact.
                        </p>
                    </article>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls2} alt="" className={projectStyle.ls1} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Projects;