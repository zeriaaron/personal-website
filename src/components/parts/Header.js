import { Routes, Route, Link, Navigate, NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Home, About, Certificates, Projects, Contacts } from '../../components'
import headerStyle from '../../assets/styles/parts/Header.module.css'



export default function Header() {
    const togglerIcon = useRef(null)
    const [isClicked, setIsClicked] = useState(false)

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

    let clickHandler = () => {
        if (isClicked) {
            togglerIcon.current.style.transform = 'rotateZ(0deg)'
            togglerIcon.current.style.transition = 'transform 1s ease-in-out'

            setIsClicked(false)
        } else {
            togglerIcon.current.style.transform = 'rotateZ(450deg)'
            togglerIcon.current.style.transition = 'transform 1s ease-in-out'

            setIsClicked(true)
        }
    }

    let onTouchEndHandler = () => {
        togglerIcon.current.style.backgroundImage = `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")`
    }

    return (
        <header>
            <nav className={`navbar navbar-expand-lg container-fluid ${headerStyle.navbar}`}>
                <div className={`container-fluid ${headerStyle.navContainer}`}>
                    <NavLink className={`navbar-brand ${headerStyle.navbarBrand}`} to={'/personal-website/'}>Zeri Aaron Malacas</NavLink>
                    <button onTouchEndCapture={onTouchEndHandler} onClick={clickHandler} className={`navbar-toggler ${headerStyle.navbarToggler}`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span ref={togglerIcon} className={`navbar-toggler-icon ${headerStyle.togglerIcon}`}></span>
                    </button>

                    {/* Home About Certificates Projects Contacts */}
                    <div className={`collapse navbar-collapse ${headerStyle.navbarCollapse}`} id="navbarNavAltMarkup">
                        <div className={`navbar-nav ${headerStyle.navbarNav}`}>
                            <NavLink to={'/personal-website/'} end className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`} aria-current="page">{links.home.content}</NavLink>
                            <NavLink to={`/personal-website/${links.about.link}`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>{links.about.content}</NavLink>
                            <NavLink to={`/personal-website/${links.certificates.link}`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>{links.certificates.content}</NavLink>
                            <NavLink to={`/personal-website/${links.projects.link}`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>{links.projects.content}</NavLink>
                            <NavLink to={`/personal-website/${links.contacts.link}`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>{links.contacts.content}</NavLink>
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

                <Route path='*' element={<Navigate to='/personal-website/' />} />
            </Routes>
        </header >
    )
}