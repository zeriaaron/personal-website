import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Home, About, Experience, Projects} from './components';

function App() {
    return (
        <>
            {/* Unchangeable */}
            <header>
                <h1>Zeri Aaron Malacas</h1>
                <nav>
                    <ul>
                        <li><Link to={'personal-website/'} className='nav-item'>Home</Link></li>
                        <li><Link to={'personal-website/about'} className='nav-item'>About</Link></li>
                        <li><Link to={'personal-website/experience'} className='nav-item'>Experience</Link></li>
                        <li><Link to={'personal-website/projects'} className='nav-item'>Projects</Link></li>
                    </ul>
                </nav>

                {/* Routing */}
                <Routes>
                    <Route path='personal-website/' element={<Home />} />
                    <Route path='personal-website/about' element={<About />} />
                    <Route path='personal-website/experience' element={<Experience />} />
                    <Route path='personal-website/projects' element={<Projects />} />
                </Routes>
            </header>

            {/* Unchangeable */}
            <footer>
                {/* Copyright and Contact */}
                <h1>Copyright &copy; Zeri Aaron Malacas</h1>
            </footer>
        </>
    )
}

export default App;
