import aboutStyle from '../assets/styles/About.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef } from 'react'
import {
    ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9, ls10, ls11, ls12,
    ls13, ls14, ls15, ls16, ls17, ls18
} from '../assets/images/about'


const About = () => {
    const date = new Date()

    const year = date.getFullYear()
    const birthYear = 2002

    const month = date.getMonth()
    const birthMonth = 7 // August [0]

    let age = month >= birthMonth ? year - birthYear : (year - birthYear) - 1;

    return (
        <>
            <main>
                <section className={aboutStyle.secContainer}>

                    <Parallax
                        pages={5}
                    >
                        <ParallaxLayer
                            offset={0}
                            style={
                                {
                                    backgroundColor: 'rgb(135, 206, 235)',
                                }
                            }
                            speed={1}
                            factor={1}
                        >
                            <ParallaxLayer
                                offset={0.5}
                                speed={-0.1}
                            >
                                <h1>Hey! What's going on?</h1>
                                <h2>Scroll down for more!</h2>
                            </ParallaxLayer>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1}
                            style={
                                {
                                    backgroundColor: 'rgb(130, 201, 230',
                                }
                            }
                            factor={1}
                        >

                        </ParallaxLayer>
                    </Parallax>





                    {/* Introductory */}
                    {/* <ParallaxLayer
                            offset={0}
                            speed={0.7}
                            style={
                                {
                                    backgroundImage: `url(${ls1}, true)`,
                                    backgroundSize: 'cover'
                                }
                            }
                        >
                            <article>
                                <h1>Hey! What is going on?</h1>
                                <p>
                                    My name is Zeri Aaron E. Malacas and I am taking up Bachelor of Science in Electronics Engineering
                                    at Mapua Malayan Colleges Laguna. I am {age} years old and currently living in the Philippines. I am
                                    passionate about Software Engineering and I want to pursue a career in the field of
                                </p>
                            </article>
                        </ParallaxLayer> */}

                    {/* Fields */}
                    {/* <article>
                                <ParallaxLayer
                                    offset={1.5}
                                >
                                    <h1>
                                        Front-End Development
                                    </h1>
                                </ParallaxLayer>

                                <ParallaxLayer
                                    offset={2.5}
                                >
                                    <h1>
                                        Back-End Development
                                    </h1>
                                </ParallaxLayer>

                                <ParallaxLayer
                                    offset={3.5}
                                >
                                    <h1>
                                        Full Stack Machine Learning Development
                                    </h1>
                                </ParallaxLayer>

                                <ParallaxLayer
                                    offset={4.5}
                                >
                                    <h1>
                                        Arduino Development.
                                    </h1>
                                </ParallaxLayer>
                            </article> */}



                    {/* Mission */}
                    {/* <article>
                            <h1>Mission</h1>
                            <ul>
                                <li>
                                    <p>
                                        I want to help businesses and individuals solve their complex problems by providing them with digital solutions through
                                        innovation, automation, and advancement
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Provide visually appealing, user-friendly, responsive, and interactive software designs for businesses and individuals to
                                        benefit from and work comfortably on
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Enable businesses and individuals to bridge data and technology successfully to maximize efficiency,
                                        growth, and success
                                    </p>
                                </li>
                            </ul>
                        </article> */}

                    {/* Vision */}
                    {/* <article>
                            <h1>Vision</h1>
                            <ul>
                                <li>
                                    <p>
                                        See the future with advanced technologies and visually appealing software designs where the works of businesses
                                        and individuals will never become easier and success will foster through the contribution I will put my hard work into
                                    </p>
                                </li>
                            </ul>
                        </article> */}

                    {/* Achievements */}
                    {/* <article>
                            <h1>You have reached this part! I will show you now my Achievements! Come take a look!</h1>
                        </article> */}


                </section>
            </main>
        </>
    )
}

export default About;