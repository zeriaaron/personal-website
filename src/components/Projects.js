import projectStyle from '../assets/styles/Projects.module.css'
import { animated, useSpring, config } from '@react-spring/web'
import { ls1, ls2 } from '../assets/images/about'

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
                        <h1 className={projectStyle.h1} style={{'color': 'skyblue'}}>Introduction</h1>
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
                                <h2 className={projectStyle.h2} style={{'color': 'skyblue'}}>About Me</h2>
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
                                <h2 className={projectStyle.h2} style={{'color': 'skyblue'}}>About Portfolio</h2>
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
                    {/* Main Section [flex-row] */}
                        {/* Section | Image */}

                    {/* Section: flex-column */}
                    <section className={`
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-start
                    p-4 ${projectStyle.mainSecContainer} gap-2
                    `}>
                        <h1 className={projectStyle.h1} style={{'color': 'skyblue'}}>My Mission</h1>
                        <article className={`
                        d-flex
                        flex-row
                        justify-content-center
                        align-items-center ${projectStyle.gap}
                        `}>
                            <h1 className={projectStyle.h1} style={{'color': 'skyblue'}}>1</h1>
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
                            <h1 className={projectStyle.h1} style={{'color': 'skyblue'}}>2</h1>
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
                            <h1 className={projectStyle.h1} style={{'color': 'skyblue'}}>3</h1>
                            <p className={projectStyle.p}>
                                Enable businesses and individuals to bridge data and technology 
                                successfully to maximize efficiency, growth and success.
                            </p>
                        </article>
                    </section>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <img src={ls1} alt="" className={projectStyle.ls1} />
                    </div>

                    {/* Inside Section: */}
                    {/* Article 1 [flex-row] */}
                        {/* Number 1 | Paragraph */}
                    {/* Article 2 [flex-row] */}
                        {/* Number 2 | Paragraph */}
                    {/* Article 3 [flex-row] */}
                        {/* Number 3 | Paragraph */}
                </section>
            </main>
        </>
    )
}

export default Projects;