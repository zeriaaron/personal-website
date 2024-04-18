import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Home, About, Experience, Projects} from './components';

// https://zeriaaron.github.io/personal-website [root: zeriaaron.github.io]
// root-relative path
// /personal-website/about -> https://zeriaaron.github.io/personal-website/about

function App() {
    return (
        <>  
            {/* Fixed */}
            <header>
                {/*  bg-body-tertiary */}
                <nav className="navbar navbar-expand-lg"> 
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'/personal-website/'}>Zeri Aaron Malacas</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to={'/personal-website/'} className='nav-link' aria-current="page">Home</Link>
                                <Link to={'/personal-website/about'} className='nav-link'>About</Link>
                                <Link to={'/personal-website/experience'} className='nav-link'>Experience</Link>
                                <Link to={'/personal-website/projects'} className='nav-link'>Projects</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Routing */}
                <Routes>
                    <Route path='/personal-website/' element={<Home />} />
                    <Route path='/personal-website/about' element={<About />} />
                    <Route path='/personal-website/experience' element={<Experience />} />
                    <Route path='/personal-website/projects' element={<Projects />} />
                </Routes>
            </header>

            {/* Fixed */}
            <footer>
                <div className="container-fluid">
                    <p>All Rights Reserved &copy; 2024 Zeri Aaron Malacas</p>
                </div>
            </footer>
        </>
    )
}

export default App;
