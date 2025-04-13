import projectStyle from '../assets/styles/Projects.module.css'
import { animated, useSpring, config, useInView } from '@react-spring/web'
import {
    intro, mission1, mission2, mission3, mission4,
    proj1, proj1v2, proj1_1, proj1_2, proj1_3, proj1_4, proj1_5, proj1_6,
    proj2, proj2v2, proj2_1, proj2_2, proj2_3, proj2_4, proj2_5, proj2_6,
    proj3, proj3v2, proj3_1, proj3_2, proj3_3, proj3_4,
    proj4, proj4v2, proj4_1,
    proj5, proj5v2, proj5_1, proj5_2, proj5_3, proj5_4, proj5_5,
    proj6, proj6v2, proj6_1, proj6_2, proj6_3, proj6_4, proj6_5, proj6_6,
    proj7, proj7v2, proj7_1
} from '../assets/images/projects'
import { Swiper, SwiperSlide } from 'swiper/react'
import { 
    Navigation, Pagination, FreeMode, Autoplay, 
    EffectCoverflow, Grid, EffectCube, EffectFlip,
    EffectCards, EffectCreative, EffectFade
} from 'swiper/modules'

import 'swiper/swiper-bundle.css'


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
                    px-4
                    ${projectStyle.imgContainer1}`}>
                        <img src={intro} alt="" className={projectStyle.ls1} style={{borderRadius: '30px'}} />
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
                    px-4
                    ${projectStyle.imgContainer1}`}>
                        {/* <img src={ls1} alt="" className={projectStyle.ls1} /> */}
                        <Swiper
                        width={700}
                        height={700}
                        modules={[Grid, Pagination]}
                        pagination={{ clickable: true }}
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}
                        slidesPerView={2}
                        spaceBetween={0}
                        className={projectStyle.missionSwiper}
                        >
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={mission1} alt="" style={{borderTopLeftRadius: '30px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={mission2} alt="" style={{borderTopRightRadius: '30px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={mission3} alt="" style={{borderBottomLeftRadius: '30px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={mission4} alt="" style={{borderBottomRightRadius: '30px'}}/>
                            </SwiperSlide>
                        </Swiper>
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
                    paddingTop: '70px',
                    paddingBottom: '70px',
                    boxShadow: '0px 0px 35px rgba(255, 255, 255, 0.5)'
                }}>
                    <h1 className={projectStyle.h1p}>My Projects</h1>
                </div>

                {/* Carousel Images of the Projects */}
                <Swiper 
                modules={[FreeMode, Autoplay, EffectCoverflow, Pagination]}
                autoplay={{delay: 5000}}
                centeredSlides={true}
                slidesPerView={5}
                spaceBetween={1}
                pagination={{clickable: true}}
                loop={true}
                effect='coverflow'
                coverflowEffect={{
                    rotate: 0,
                    stretch: 70,
                    depth: 30,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                grabCursor={true}
                className={projectStyle.projectSwiper}
                >
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project1">
                            <img src={proj1v2} alt="Philippine Informal Reading Inventory"/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project2">
                            <img src={proj2v2} alt=""/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project3">
                            <img src={proj3v2} alt=""/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project4">
                            <img src={proj4v2} alt=""/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project5">
                            <img src={proj5v2} alt=""/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project6">
                            <img src={proj6v2} alt=""/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className={projectStyle.swiperSlide}>
                        <a href="#project7">
                            <img src={proj7v2} alt=""/>
                        </a>
                    </SwiperSlide>
                </Swiper>

                {/* 1st Project */}
                <section id='project1' className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center
                mt-5
                `}>
                    <section className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Philippine Informal Reading Inventory Automation</h1>
                        
                        <section className={`
                        d-flex flex-row
                        justify-content-center
                        align-items-start
                        gap-4
                        `}>
                            {/* Description | Role and Responsibilities */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project which is a new automated class reading profile in English is
                                    an originally developed program in Microsoft Excel using Visual Basic for
                                    Applications programming language and Formulas. VBA's main function is for
                                    the design and aesthetic of the template, and to enhance the features of
                                    Microsoft Excel. Formulas is used to calculate the complex computation involved
                                    in the entire template of the Class Reading Profile.
                                </p>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <ul>
                                    <li>VBA Developer</li>
                                    <li>Data Analyst</li>
                                </ul>
                                <p className={projectStyle.p}>
                                    I am responsible for coding the workbook in excel and analyzing the data for the
                                    right calculations of all the formulas embedded within the spreadsheets of the 
                                    workbook.
                                </p>
                            </article>
                            {/* Technologies and Tools Used | Outcomes and Achievements */}
                            <article className={`
                            d-flex 
                            flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <ul>
                                    <li>Visual Basic for Applications</li>
                                    <li>Microsoft Excel</li>
                                </ul>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I successfully automated the Philippine Informal Reading Inventory form and
                                    added new and advanced features to aid teachers' data analysis and visualization
                                    of their students' reading comprehension data. I was also given the opportunity
                                    to submit it through the Divisions' Office with the help of my Mother. As of today,
                                    there are over 150 teachers who are utilizing the form and benefiting from the work
                                    I have done at Mamatid Elementary School.
                                </p>
                            </article>
                        </section>
                    </section>

                    {/* Image - Cube */} 
                    <div className={`
                    d-flex
                    flex-row
                    justify-content-center
                    align-items-center    
                    p-4
                    `}>
                        <Swiper
                        modules={[Pagination, EffectCube]}
                        cubeEffect={{shadow: true, shadowOffset: 20, shadowScale: 0.94, slideShadows: true}}
                        effect='cube'
                        loop={true}
                        grabCursor={true}
                        pagination={{clickable: true}}
                        className={projectStyle.swiper1}
                        >
                            <SwiperSlide>
                                <img src={proj1_1} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj1_2} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj1_3} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj1_4} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj1_5} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj1_6} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* 2nd Project */}
                <section id='project2' className={`
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
                        {/* <img src={ls1} alt="" className={projectStyle.ls1} /> */}
                        <Swiper
                        effect='cards'
                        grabCursor={true}
                        modules={[EffectCards, Pagination]}
                        pagination={{clickable: true}}
                        className={projectStyle.swiper2}
                        >
                            <SwiperSlide>
                                <img src={proj2_1} alt="" className={projectStyle.imgProj}/>                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj2_2} alt="" className={projectStyle.imgProj}/>                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj2_3} alt="" className={projectStyle.imgProj}/>                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj2_4} alt="" className={projectStyle.imgProj}/>                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj2_5} alt="" className={projectStyle.imgProj}/>                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={proj2_6} alt="" className={projectStyle.imgProj}/>                                
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* Description */}
                    <section className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Spoken</h1>
                        
                        <section className={`
                        d-flex flex-row
                        justify-content-center
                        align-items-start
                        gap-4
                        `}>
                            {/* Description | Role and Responsibilities */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project is a sign language translator desktop
                                    application for aiding mute and deaf individuals
                                    to communicate with ease, with high availability,
                                    and to eliminate communication barrier among others.
                                    This software and hardware development opens up
                                    huge opportunities for deaf and mute individuals and
                                    help them build up their confidence when speaking
                                    their hearts out in front of the masses. This project
                                    also highlights the use of deep learning algorithm
                                    which operates with less human intervention.
                                </p>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <p className={projectStyle.p}>
                                    <ul>
                                        <li>Full-stack Machine Learning Developer</li>
                                        <li>Desktop Application Developer</li>
                                    </ul>
                                    <p className={projectStyle.p}>
                                        I am responsible for coding the data preprocessing pipeline
                                        which includes data acquisition, data organization, data
                                        processing, feature extraction, data manipulation for
                                        acquiring the best train and test datasets configuration,
                                        the first machine learning algorithm during the phase one of
                                        our prototype, the evaluation metrics, and the algorithm for
                                        predicting live for testing the model to new and unseen data.
                                        I also developed the graphical user interface where the
                                        deep learning algorithm is integrated into.
                                    </p>
                                </p>
                            </article>
                            {/* Technologies and Tools Used | Outcomes and Achievements */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            mx-4
                            `}>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <p className={projectStyle.p}>
                                    <div className={`
                                    d-flex
                                    flex-row
                                    justify-content-center
                                    align-items-start
                                    `}>
                                        <ul>
                                            <li>Python</li>
                                            <li>GitHub</li>
                                            <li>MediaPipe</li>
                                        </ul>
                                        <ul>
                                            <li>TensorFlow</li>
                                            <li>Keras</li>
                                            <li>OpenCV</li>
                                        </ul>
                                        <ul>
                                            <li>Pandas</li>
                                            <li>Scikit-learn</li>
                                            <li>NumPy</li>
                                        </ul>
                                        <ul>
                                            <li>Tkinter</li>
                                            <li>CustomTkinter</li>
                                            <li>AwesomeTkinter</li>
                                        </ul>
                                    </div>
                                </p>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I have successfully improved my skills on full-stack machine
                                    learning development and desktop application development. We
                                    sucessfully tested our project on actual instructor of deaf
                                    and mute individuals and was satisfied with our dedication
                                    of aiding these individuals.
                                </p>
                            </article>
                        </section>
                    </section>
                </section>

                {/* 3rd Project */}
                <section id='project3' className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Description */}
                    <section className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Smart Calculator</h1>
                        
                        <section className={`
                        d-flex flex-row
                        justify-content-center
                        align-items-start
                        gap-4
                        `}>
                            {/* Description | Role and Responsibilities */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project is a software which features many advanced functions
                                    than a standard scientific calculator. This program has 50 functions
                                    in total which highlights the basic commands functions, different types
                                    of equations and polynomials, graphing 2D plots, graphing 3D plots,
                                    and higher mathematical operations that MATLAB provides.
                                </p>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <p className={projectStyle.p}>
                                    <ul>
                                        <li>Programmatic GUI Developer</li>
                                        <li>Mathematician</li>
                                    </ul>
                                    <p className={projectStyle.p}>
                                        I am responsible for hard coding the entire functionalities and GUI
                                        of the smart calculator application without relying on the App Designer
                                        of MATLAB. I am also in charge of understanding the mathematical
                                        operations used in the project for the operations to work as intended.
                                    </p>
                                </p>
                            </article>
                            {/* Technologies and Tools Used | Outcomes and Achievements */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            mx-4
                            `}>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <p className={projectStyle.p}>
                                    <div className={`
                                    d-flex
                                    flex-row
                                    justify-content-center
                                    align-items-start
                                    `}>
                                        <ul>
                                            <li>MATLAB</li>
                                        </ul>
                                    </div>
                                </p>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I was able to completely and manually coded the GUI of the smart calculator
                                    along with coding its functionalities. Also, I was able to showcase my
                                    understanding on different mathematical operations and graphs available in
                                    MATLAB, and improve my desktop application development skills by providing a 
                                    graphical user interface for the program.
                                </p>
                            </article>
                        </section>
                    </section>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <Swiper className={projectStyle.swiper3}
                        effect='coverflow'
                        modules={[Pagination, EffectCoverflow]}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{clickable: true}}
                        loop={true}
                        >
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj3_1} alt="" style={{width: '300px', height: '100%', borderRadius: '10px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj3_2} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj3_3} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj3_4} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* 4th Project */}
                <section id='project4' className={`
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
                        <Swiper
                        className={projectStyle.swiper4}
                        effect='flip'
                        loop={true}
                        modules={[Pagination, EffectFlip]}
                        flipEffect={{
                            limitRotation: true,
                            slideShadows: true,
                        }}
                        grabCursor={true}
                        pagination={{clickable: true}}
                        >
                            {/* <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj4} alt="" style={{width: '300px', height: '100%', borderRadius: '10px'}} />
                            </SwiperSlide> */}
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj4_1} alt="" className={projectStyle.imgProj} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* Description */}
                    <section className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Signal Procesing Application</h1>
                        
                        <section className={`
                        d-flex flex-row
                        justify-content-center
                        align-items-start
                        gap-4
                        `}>
                            {/* Description | Role and Responsibilities */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project is a desktop application that comprises of different
                                    filters, frequency filters, plots, and other configurations for
                                    signals. In this desktop applicatoin, the observation of data and
                                    interpretation of results are a must, therefore it was designed in
                                    such a way that graphs and information about the signal are provided
                                    and available for use.
                                </p>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <p className={projectStyle.p}>
                                    <ul>
                                        <li>Signal Processing Engineer</li>
                                        <li>Desktop Application Developer</li>
                                    </ul>
                                    <p className={projectStyle.p}>
                                        I am responsible for creating and managing algorithms to process
                                        signals and analyze the filtered signals afterwards. I am also
                                        the one who is responsible for coding the desktop application
                                        to provide a graphical user interface for users to benefit from.
                                    </p>
                                </p>
                            </article>
                            {/* Technologies and Tools Used | Outcomes and Achievements */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            mx-4
                            `}>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <p className={projectStyle.p}>
                                    <div className={`
                                    d-flex
                                    flex-row
                                    justify-content-center
                                    align-items-start
                                    `}>
                                        <ul>
                                            <li>MATLAB</li>
                                            <li>MATLAB App Designer</li>
                                        </ul>
                                    </div>
                                </p>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I successfully managed and created algorithms required for the signal
                                    to be processed efficiently. I was able to improve my skills on desktop
                                    application development by integrating the signal processing functions
                                    into the app using the app designer of MATLAB. The team also passed
                                    the course because of the combination our skills and a result of a
                                    good teamwork.
                                </p>
                            </article>
                        </section>
                    </section>
                </section>

                {/* 5th Project */}
                <section id='project5' className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center`}>
                    {/* Description */}
                    <section className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>Frequency Distribution Table</h1>
                        
                        <section className={`
                        d-flex flex-row
                        justify-content-center
                        align-items-start
                        gap-4
                        `}>
                            {/* Description | Role and Responsibilities */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project is a frequency distribution table with graphical user interface
                                    that highlights the different components that are used to interpret data of 
                                    a frequency dsitribution along with additional features such as bar and 
                                    logarithmic plots. Furthermore, it has a data analysis notes panel for logging
                                    activities in order for data analysts to analyze, interpret, and observe the
                                    results.
                                </p>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <p className={projectStyle.p}>
                                    <ul>
                                        <li>Data Analyst</li>
                                        <li>Desktop Application Developer</li>
                                    </ul>
                                    <p className={projectStyle.p}>
                                        I am accountable for developing the software by creating GUI programmatically
                                        using pre MATLAB code. I was also responsible for analyzing and understanding
                                        the data, and components that should be accounted to build the frequency
                                        distribution table properly and effectively.
                                    </p>
                                </p>
                            </article>
                            {/* Technologies and Tools Used | Outcomes and Achievements */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            mx-4
                            `}>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <p className={projectStyle.p}>
                                    <div className={`
                                    d-flex
                                    flex-row
                                    justify-content-center
                                    align-items-start
                                    `}>
                                        <ul>
                                            <li>MATLAB</li>
                                        </ul>
                                    </div>
                                </p>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I have successfully honed my skills on programming in MATLAB and desktop
                                    application development by creating the GUI of the program in a programmatic
                                    manner. I was also able to analyze the data of a frequency distribution table
                                    including its components and different data plots that are available in MATLAB
                                    to interpret data even further and improve my craft on data analysis overall.
                                </p>
                            </article>
                        </section>
                    </section>
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <Swiper
                        effect='creative'
                        modules={[Pagination, EffectCreative]}
                        grabCursor={true}
                        pagination={{clickable: true}}
                        className={projectStyle.swiper5}
                        creativeEffect={{
                            limitProgress: 1,
                            prev: {
                                shadow: true,
                                translate: ['-125%', 0, -800],
                                rotate: [0, 0, -90],
                            },
                            next: {
                                shadow: true,
                                translate: ['125%', 0, -800],
                                rotate: [0, 0, 90],
                            },
                            perspective: true,
                            progressMultiplier: 1,
                            shadowPerProgress: false
                        }}
                        loop={true}
                        >
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj5_1} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj5_2} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj5_3} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj5_4} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj5_5} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* 6th Project */}
                <section id='project6' className={`
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
                        <Swiper
                        modules={[Pagination]}
                        direction='vertical'
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        className={projectStyle.swiper6}
                        loop={true}
                        >
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj6_1} alt="" style={{width: '500px', height: '100%', borderRadius: '10px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj6_2} alt="" style={{width: '500px', height: '100%', borderRadius: '10px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj6_3} alt="" style={{width: '500px', height: '100%', borderRadius: '10px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj6_4} alt="" style={{width: '500px', height: '100%', borderRadius: '10px'}}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj6_5} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj6_6} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* Description */}
                    <section className={`d-flex 
                    flex-column
                    justify-content-center
                    align-items-start 
                    p-4 ${projectStyle.mainSecContainer}`}>
                        <h1 className={projectStyle.h1}>CheckMe!</h1>
                        
                        <section className={`
                        d-flex flex-row
                        justify-content-center
                        align-items-start
                        gap-4
                        `}>
                            {/* Description | Role and Responsibilities */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            `}>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project is a desktop application for teachers to check their quizzes with a multiple
                                    choice type of questions. This software features functionalities such as input validation,
                                    input view, and output saving. This also provides flexbility on the output file as the
                                    file type, saving location, file name, and file layout can be customized based on the users'
                                    preferences. The software is accompanied with a website integrated into the application to
                                    provide documentation, download and information about me. It also has an installed software
                                    product review form for users to rate the program.
                                </p>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <ul>
                                    <li>Front-end Web Developer</li>
                                    <li>Desktop Application Developer</li>
                                </ul>
                                <p className={projectStyle.p}>
                                    I am responsible for coding the software application by utilizing PyQt5 and the website
                                    that is embedded within the application using HTML and CSS. I am also responsbile for 
                                    the user interface design to make a visually appealing view of the program and the website.
                                    Lastly, I wa also responsible in creating the Google Form for the evaluation of the application.
                                </p>
                            </article>
                            {/* Technologies and Tools Used | Outcomes and Achievements */}
                            <article className={`
                            d-flex flex-column
                            justify-content-center
                            align-items-start
                            mx-4
                            `}>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <p className={projectStyle.p}>
                                    <div className={`
                                    d-flex
                                    flex-row
                                    justify-content-center
                                    align-items-start
                                    `}>
                                        <div
                                        className={`
                                        d-flex
                                        flex-row
                                        justify-content-center
                                        align-items-start
                                        `}
                                        >
                                            <ul>
                                                <li>Python</li>
                                                <li>PyQt5</li>
                                                <li>QtDesigner</li>
                                            </ul>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Google Form</li>
                                            </ul>
                                        </div>
                                    </div>
                                </p>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I have successfully created the desktop application for checking
                                    students' quizes with a multiple choice type of questions. I was
                                    able to hone my skill on desktop application development by 
                                    practicing my programming skills on utilizing frameworks such as
                                    PyQt5 using Qt tools such as QtDesigner, programming language such
                                    as Python. Along with that, I was able to improve my kill on front-end
                                    web development by creating a website using HTML and CSS as well.
                                </p>
                            </article>
                        </section>
                    </section>
                </section>

                {/* 7th Project */}
                <section id='project7' className={`d-flex 
                flex-row flex-wrap
                justify-content-evenly
                align-items-center m-5`}>
                    {/* Information */}
                    <section className={`
                    d-flex
                    flex-column
                    ${projectStyle.mainSecContainer}    
                    `}>
                        <h1 className={projectStyle.h1}>Pulo Diezmo Road Traffic Lights</h1>
                        <section className='row'>
                            <article className='col'>
                                <h2 className={projectStyle.h2}>Description</h2>
                                <p className={projectStyle.p}>
                                    This project is a miniature traffic lights of Pulo Diezmo Road
                                    at Laguna. It demonstrates how the traffic lights in the said
                                    road works. It comprises of semiconductor devices that are controlled
                                    by Arduino Uno, a microcontroller that can be coded and control the
                                    behavior of the semiconductor devices.
                                </p>
                            </article>
                            <article className='col'>
                                <h2 className={projectStyle.h2}>Technologies and Tools Used</h2>
                                <ul>
                                    <li>Arduino IDE</li>
                                    <li>Arduino Uno</li>
                                    <li>Semiconductor devices</li>
                                    <li>C++</li>
                                </ul>
                            </article>
                        </section>
                        <section className='row'>
                            <article className='col'>
                                <h2 className={projectStyle.h2}>Role and Responsibilities</h2>
                                <ul>
                                    <li>Arduino Developer</li>
                                    <li>Electronics Engineer</li>
                                    <li>Electronics Technician</li>
                                </ul>
                                <p className={projectStyle.p}>
                                    I am responsible for coding the timing, execution, functionality, and
                                    process of the hardware through coding it in Arduino and utilizing the
                                    Arduino Uno. I was also responsible for setting up the hardware by carefully
                                    installing semiconductor devices, and meticulously organizing the wires in
                                    the breadboard, so that it would reflect the real traffic lights in Pulo
                                    Diezmo Road.
                                </p>
                            </article>
                            <article className='col'>
                                <h2 className={projectStyle.h2}>Outcomes and Achievements</h2>
                                <p className={projectStyle.p}>
                                    I have successfully improved my skills on Electronics Engineering by
                                    controlling the semiconductor devices that are used as the hardware of the 
                                    project. I also developed my programming skills by utilizing Arduino IDE and
                                    coding using Arduino which uses a variant of the C++ programming language. I
                                    also developed my logical thinking by planning how the timing, execution, and
                                    process of the minature traffic lights would imitate the real world traffic
                                    lights properly.
                                </p>
                            </article>
                        </section>
                    </section>
                    
                    {/* Image */}
                    <div className={`d-flex 
                    flex-row
                    justify-content-center
                    align-items-center 
                    px-4 ${projectStyle.imgContainer1}`}>
                        <Swiper
                        className={projectStyle.swiper7}
                        effect='fade'
                        modules={[Pagination, EffectFade]}
                        grabCursor={true}
                        pagination={{clickable: true}}
                        >
                            {/* <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj7} alt="" style={{width: '300px', height: '100%', borderRadius: '10px'}}/>
                            </SwiperSlide> */}
                            <SwiperSlide className={projectStyle.swiperSlide}>
                                <img src={proj7_1} alt="" className={projectStyle.imgProj}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Projects;