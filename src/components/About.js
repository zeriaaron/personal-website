import '../assets/styles/About.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import { ls1, ls2, ls3, ls4 } from '../assets/images/about'

let About = () => {
    const parallax = useRef(null)

    return (
        <>
            <main>
                <Parallax
                    ref={parallax}
                    pages={3}
                >
                    <ParallaxLayer
                        offset={0}
                        speed={0}
                        factor={3}
                        style={
                            {
                                backgroundImage: `url(${ls1})`,
                                objectFit: 'cover'
                            }
                        }
                    >
                        <ParallaxLayer
                            offset={0.8}
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
                        factor={2}
                        style={
                            {
                                backgroundImage: `url(${ls3})`,
                                objectFit: 'cover'
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