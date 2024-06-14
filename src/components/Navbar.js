import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showNavbarMenu, setShowNavbarMenu] = useState(false)

    const handleNavbarMenu = () => {
        setShowNavbarMenu(!showNavbarMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setShowNavbarMenu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [showNavbarMenu])

    return(
        <nav id="navbar">
            <div className="nav-container container">
                <div className="nav-logo">
                    <div className="nav-title">
                        <Link to={"/"}>
                            <h1 className="c-primary">WHATWEATHER</h1>
                        </Link>
                    </div>
                    <div className={`mobile-bar ${showNavbarMenu ? 'active' : ''}` } onClick={handleNavbarMenu}>
                        <i className="fa-solid fa-bars c-primary"></i>
                    </div>
                </div>
                <div className={`nav-menu ${showNavbarMenu ? 'active' : ''}` }>
                    <ul className="nav-list">
                        <li className="nav-list-item" onClick={handleNavbarMenu}>
                            <Link to={"/weather-details?q=london"} className="f-normal c-light"> Weather City </Link>
                        </li>
                        <li className="nav-list-item" onClick={handleNavbarMenu}>
                            <Link to={"/news"} className="f-normal c-light"> News </Link>
                        </li>
                        <li className="nav-list-item" onClick={handleNavbarMenu}>
                            <Link to={"/contact"} className="f-normal c-light"> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`mobile-menu ${showNavbarMenu ? 'active' : ''}`}>
                <div className="mobile-top">
                    <div className="close-button" onClick={handleNavbarMenu}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <h3>WHATWEATHER</h3>
                    <ul className="mobile-nav-list">
                        <li className="mobile-nav-list-item" onClick={handleNavbarMenu}>
                            <i className="fa-solid fa-house f-normal"></i>
                            <Link to={"/"} className="f-normal c-dark"> Home </Link>
                        </li>
                        <li className="mobile-nav-list-item" onClick={handleNavbarMenu}>
                            <i className="fa-solid fa-sun f-normal"></i>
                            <Link to={"/weather-details?q=london"} className="f-normal c-dark"> Weather City </Link>
                        </li>
                        <li className="mobile-nav-list-item" onClick={handleNavbarMenu}>
                            <i className="fa-solid fa-newspaper f-normal"></i>
                            <Link to={"/news"} className="f-normal c-dark"> News </Link>
                        </li>
                        <li className="mobile-nav-list-item" onClick={handleNavbarMenu}>
                            <i className="fa-solid fa-message f-normal"></i>
                            <Link to={"/contact"} className="f-normal c-dark"> Contact </Link>
                        </li>
                    </ul>
                </div>
                <div className="mobile-bottom">
                    <div className="mobile-menu-social">
                        <Link>
                            <i className="fa-brands fa-facebook"></i>
                        </Link>
                        <Link>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link>
                            <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link>
                            <i className="fa-brands fa-youtube"></i>
                        </Link> 
                    </div>
                    <div className="mobile-menu-rights">
                        © 2024 Kocbeler, All rights reserved
                    </div>
                </div>
            </div>
        </nav>
)
}

export default Navbar