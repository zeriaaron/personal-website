import '../assets/styles/About.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useEffect } from 'react'
import { ls1, ls2, ls3, ls4, ls5, ls6, ls7 } from '../assets/images/about'

let About = () => {
    const parallax = useRef(null)

    // useEffect(

    // )

    return (
        <>
            <main>
                <Parallax
                    ref={parallax}
                    pages={2}
                    style={
                        {
                            top: '0',
                            left: '0'
                        }
                    }
                >
                    <ParallaxLayer
                        offset={0}
                        speed={0}
                        factor={0.5}
                        style={
                            {
                                backgroundImage: `url(${ls2})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                // backgroundPosition: 'center'
                            }
                        }
                    >
                        <ParallaxLayer
                            offset={0.4}
                            speed={0.6}
                            style={
                                {
                                    display: 'block',
                                    width: '20%',
                                    marginLeft: '55%'
                                }
                            }
                        >
                            <h1>Welcome to the About section</h1>
                        </ParallaxLayer>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={1}
                        speed={0}
                        factor={0.5}
                        style={
                            {
                                backgroundImage: `url(${ls6})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                // backgroundPosition: 'center',
                            }
                        }
                    >
                    </ParallaxLayer>

                    <ParallaxLayer>
                    </ParallaxLayer>
                </Parallax>
            </main>
        </>
    )
}

export default About;