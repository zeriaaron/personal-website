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
                        <figcaption>Zeri Aaron's Picture wearing his black long sleeve polo</figcaption>
                    </figure>
                </section>
                <section>

                </section>
            </main>
        </>
    )
}

export default Home;