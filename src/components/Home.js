import '../assets/styles/Home.css'
import pictureOfMe from '../assets/images/zeri_trans_updated3.png'
import yellowSplash from '../assets/images/yellow_splash.jpg'
import {Link} from 'react-router-dom'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

let Home = () => {
    return (
        <>
            <main>
                <section>
                    <div>
                        <Parallax pages={2} style={{overflow: "hidden"}}>
                            <ParallaxLayer>
                                <h1>Welcome</h1>
                            </ParallaxLayer>

                            <ParallaxLayer offset={1}>
                                <h1>Hi</h1>
                            </ParallaxLayer>
                        </Parallax>
                    </div>
                    <div className='paint' style={{backgroundImage: `url(${yellowSplash})`}}></div>
                    <img src={pictureOfMe} alt="Zeri Aaron" className="me" />
                </section>
                <section>
                    <h1><strong>Zeri Aaron Malacas</strong></h1>
                    <h2>Electronics Engineer</h2>
                    <p>
                        A future <strong>Software Engineer</strong> eager to make a change 
                        and create a better future by providing solutions 
                        to contemporary problems that individuals and companies 
                        face through designing and building software applications 
                        that prioritize interactivity and responsiveness of design.
                    </p>
                    <ul className="icons container-fluid">
                        <li><Link to="https://www.linkedin.com/in/zeri-aaron-malacas" target="_blank"><i class="bi bi-linkedin"></i></Link></li>
                        <li><Link to="https://github.com/zeriaaron" target="_blank"><i class="bi bi-github"></i></Link></li>
                        <li><Link to="https://www.facebook.com/zeriaaronmalacas/" target="_blank"><i class="bi bi-facebook"></i></Link></li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Home;