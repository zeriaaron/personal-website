import '../assets/styles/Home.css'
import pictureOfMe from '../assets/images/zeri_trans_updated3.png'

let Home = () => {
    return (
        <>
            <main>
                <section className='leftSec'>
                    <img src={pictureOfMe} alt="Zeri Aaron" />
                </section>
                <section className='rightSec'>
                    <h1><strong>Zeri Aaron Malacas</strong></h1>
                    <h2><strong>Electronics Engineer</strong></h2>
                    <p>
                        A future <strong>Software Engineer</strong> eager to make a change 
                        and create a better future by providing solutions 
                        to contemporary problems that individuals and companies 
                        face through designing and building software applications 
                        that prioritize interactivity and responsiveness of design.
                    </p>
                </section>
            </main>
        </>
    )
}

export default Home;