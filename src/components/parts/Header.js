import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import headerStyle from '../../assets/styles/parts/Header.module.css'



export default function Header() {
    const togglerIcon = useRef(null)
    const [isClicked, setIsClicked] = useState(false)

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
                            <NavLink to={`/home`} end className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`} aria-current="page">Home</NavLink>
                            <NavLink to={`/about`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>About</NavLink>
                            <NavLink to={`/certificates`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>Certificates</NavLink>
                            <NavLink to={`/projects`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>Projects</NavLink>
                            <NavLink to={`/contacts`} className={({ isActive }) => `nav-link ${headerStyle.navLink} ${isActive ? headerStyle.activeLink : ''}`}>Contacts</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}