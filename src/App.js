import './App.css';
import Header from './components/parts/Header'
import Footer from './components/parts/Footer'
// import { useState, useEffect, useRef } from 'react'

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



    // console.log(links.home.content)

    return (
        <>
            <Header />


            <Footer />
        </>
    )
}

export default App;
