import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Home, About, Certificates, Projects, Contacts } from './components';
import { useState, useEffect, useRef } from 'react'

// https://zeriaaron.github.io/personal-website [root: zeriaaron.github.io]
// root-relative path
// /personal-website/about -> https://zeriaaron.github.io/personal-website/about

function App() {
    // onScroll
    // const [lastScrollTop, setLastScrollTop] = useState(0)
    // const navRef = useRef(null);

    // let handleScroll = () => {
    //     const currentScrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

    //     if (currentScrollTop > lastScrollTop) {
    //         // console.log('Down')
    //         navRef.current.style.height = '56px'
    //         navRef.current.style.transition = 'height 0.5s ease-out'
    //     } else {
    //         // console.log('Up')
    //     }

    //     if (currentScrollTop <= 0) {
    //         navRef.current.style.height = '65px'
    //         navRef.current.style.transition = 'height 0.5s ease-in'
    //     }

    //     setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    // }

    // useEffect(
    //     () => {
    //         window.addEventListener('scroll', handleScroll)

    //         return () => {
    //             window.removeEventListener('scroll', handleScroll)
    //         }
    //     }, [lastScrollTop]
    // )

    const links = {
        home: {
            content: 'Home'
        },
        about: {
            link: 'about',
            content: 'About'
        },
        certificates: {
            link: 'certificates',
            content: 'Certificates'
        },
        projects: {
            link: 'projects',
            content: 'Projects'
        },
        contacts: {
            link: 'contacts',
            content: 'Contacts'
        },
    }

    // console.log(links.home.content)

    return (
        <>
            {/* Fixed */}
            <header>
                {/*  bg-body-tertiary */}
                <nav className="navbar navbar-expand-lg container-fluid">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'/personal-website/'}>Zeri Aaron Malacas</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to={'/personal-website/'} className='nav-link' aria-current="page">{links.home.content}</Link>
                                <Link to={`/personal-website/${links.about.link}`} className='nav-link'>{links.about.content}</Link>
                                <Link to={`/personal-website/${links.certificates.link}`} className='nav-link'>{links.certificates.content}</Link>
                                <Link to={`/personal-website/${links.projects.link}`} className='nav-link'>{links.projects.content}</Link>
                                <Link to={`/personal-website/${links.contacts.link}`} className='nav-link'>{links.contacts.content}</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Routing */}
                <Routes>
                    <Route path='/personal-website/' element={<Home />} />
                    <Route path='/personal-website/about' element={<About />} />
                    <Route path='/personal-website/certificates' element={<Certificates />} />
                    <Route path='/personal-website/projects' element={<Projects />} />
                    <Route path='/personal-website/contacts' element={<Contacts />} />
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
