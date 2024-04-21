import aboutStyle from '../assets/styles/About.module.css'
import { useRef } from 'react'
import { ls1, ls2, ls3, ls4, ls5, ls6, ls7 } from '../assets/images/about'


const About = () => {
    return (
        <>
            <main>
                <div className={aboutStyle.space}></div>
                <h1>What is going on?!</h1>
                <p>My name is Zeri Aaron E. Malacas</p>
            </main>
        </>
    )
}

export default About;