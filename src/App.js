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
                        <li><Link to={'home'} className='nav-item'>Home</Link></li>
                        <li><Link to={'about'} className='nav-item'>About</Link></li>
                        <li><Link to={'experience'} className='nav-item'>Experience</Link></li>
                        <li><Link to={'projects'} className='nav-item'>Projects</Link></li>
                    </ul>
                </nav>

                {/* Routing */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='projects' element={<Projects />} />
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
