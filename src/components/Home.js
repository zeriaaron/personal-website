import '../assets/styles/Home.css'
import pictureOfMe from '../assets/images/zeri_trans_updated3.png'

let Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <main>
                <section>
                    <figure>
                        <img src={pictureOfMe} alt="Zeri Aaron" />
                    </figure>
                </section>
                <section>
                    <h1>Zeri Aaron Malacas</h1>
                    <h2>Electronics Engineer</h2>
                    <p>
                        A future Software Engineer eager to make a change 
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