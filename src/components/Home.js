import homeStyle from '../assets/styles/Home.module.css'
import pictureOfMe from '../assets/images/zeri2.png'
import yellowSplash from '../assets/images/yellow_splash.jpg'
import { Link } from 'react-router-dom'


let Home = () => {
    return (
        <>
            <main className={homeStyle.mainContainer}>
                <section className={`d-flex 
                flex-row 
                flex-wrap
                justify-content-center 
                align-items-center 
                ${homeStyle.secContainer}`}
                >
                    {/* <div className='paint' style={{ backgroundImage: `url(${yellowSplash})` }}></div> */}

                    <div className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-center
                    p-3
                    ${homeStyle.imgContainer}`}>
                        <img src={pictureOfMe} alt="Zeri Aaron" className={`${homeStyle.me}`} />
                    </div>

                    <article className={`d-flex 
                    flex-column 
                    justify-content-center
                    align-items-start
                    p-4
                    ${homeStyle.descContainer}`}>
                        <h1 className={homeStyle.h1}><strong>Zeri Aaron Malacas</strong></h1>
                        <h2 className={homeStyle.h2}>Electronics Engineer</h2>
                        <p className={homeStyle.p}>
                            A future <strong>Software Engineer</strong> eager to make a change
                            and create a better future by providing solutions
                            to contemporary problems that individuals and companies
                            face through designing and building software applications
                            that prioritize interactivity and responsiveness of design.
                        </p>
                        <ul className={`d-inline-flex container-fluid gap-2 ${homeStyle.ulContainer}`}>
                            <li className={homeStyle.li}><Link to="https://www.linkedin.com/in/zeri-aaron-malacas" target="_blank"><i className={`bi bi-linkedin ${homeStyle.icon}`}></i></Link></li>
                            <li className={homeStyle.li}><Link to="https://github.com/zeriaaron" target="_blank"><i className={`bi bi-github ${homeStyle.icon}`}></i></Link></li>
                            <li className={homeStyle.li}><Link to="https://www.facebook.com/zeriaaronmalacas/" target="_blank"><i className={`bi bi-facebook ${homeStyle.icon}`}></i></Link></li>
                        </ul>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Home;