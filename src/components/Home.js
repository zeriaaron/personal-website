import homeStyle from '../assets/styles/Home.module.css'
import pictureOfMe from '../assets/images/zeri2.png'
import { useSpring, animated, config } from '@react-spring/web'
// import yellowSplash from '../assets/images/yellow_splash.jpg'
import { Link } from 'react-router-dom'


let Home = () => {
    const useSlideAnimation = (fromX, toX) => {
        return useSpring({
            from: { transform: `translateX(${fromX}%)`, opacity: 0 },
            to: { transform: `translateX(${toX}%)`, opacity: 1 },
            // config: { tension: 100, friction: 30 },
            config: config.molasses,
            delay: 500,
        });
    };

    const imageAnimation = useSlideAnimation(-100, 0);
    const descAnimation = useSlideAnimation(100, 0);

    return (
        <>
            <main className={homeStyle.mainContainer}>

                {/* Container */}
                <section className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center
                ${homeStyle.secContainer}`}
                >
                    {/* Image Container: left */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center
                    px-4 pt-4
                    ${homeStyle.imgContainer}`}>
                        {/* <img src={pictureOfMe} alt="Zeri Aaron Malacas" className={`${homeStyle.me}`} style={imageAnimation} /> */}
                        <animated.img src={pictureOfMe} alt="Zeri Aaron Malacas" className={`${homeStyle.me}`} style={imageAnimation} />
                    </div>

                    {/* Description Container: Right */}
                    <animated.article className={`d-flex
                    flex-column 
                    justify-content-center
                    align-items-start
                    px-4 pt-4
                    ${homeStyle.descContainer}`} style={descAnimation}>
                        <h1 className={homeStyle.h1}><strong>Zeri Aaron Malacas</strong></h1>
                        <h2 className={homeStyle.h2}>Electronics Engineer</h2>
                        <p className={homeStyle.p}>
                            A future <strong>Software Engineer</strong> eager to make a change
                            and create a better future by providing solutions
                            to contemporary problems that individuals and companies
                            face through designing and building software applications
                            that prioritize interactivity and responsiveness of design.
                        </p>
                        <ul className={`d-inline-flex container-fluid gap-3 ${homeStyle.ulContainer}`}>
                            <li className={homeStyle.li}><Link to="https://www.linkedin.com/in/zeri-aaron-malacas" target="_blank"><i className={`bi bi-linkedin ${homeStyle.icon}`}></i></Link></li>
                            <li className={homeStyle.li}><Link to="https://github.com/zeriaaron" target="_blank"><i className={`bi bi-github ${homeStyle.icon}`}></i></Link></li>
                            <li className={homeStyle.li}><Link to="https://www.facebook.com/zeriaaronmalacas/" target="_blank"><i className={`bi bi-facebook ${homeStyle.icon}`}></i></Link></li>
                        </ul>
                    </animated.article>
                </section>
            </main>
        </>
    )
}

export default Home;