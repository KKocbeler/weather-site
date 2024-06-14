import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className='footer container'>
            <div className="footer-top">
                <div className="footer-icons">
                    <h2>WHATWEATHER</h2>
                    <div className="mobile-links">
                        <Link className='app-links'>
                            <i className="fa-brands fa-apple"></i>
                            <div className="link-text">
                                <span className='c-light'>Download on the</span>
                                <p className='c-light f-normal'>App Store</p>
                            </div>
                        </Link>

                        <Link className='app-links'>
                            <i className="fa-brands fa-google-play"></i>
                            <div className="link-text">
                                <span className='c-light'>Download on the</span>
                                <p className='c-light f-normal'>Play Store</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="menu">
                    <div className='footer-menu'>
                        <h4 className='footer-menu-title'>PRODUCTS & SERVICES</h4>
                        <ul className='footer-list'>
                            <li className='footer-list-item'><Link>For Business</Link></li>
                            <li className='footer-list-item'><Link>For Partnerts</Link></li>
                            <li className='footer-list-item'><Link>For Advertising</Link></li>
                            <li className='footer-list-item'><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <h4 className='footer-menu-title'>TERMS & CONDITIONS</h4>
                        <ul className='footer-list'>
                            <li className='footer-list-item'><Link>Terms and conditions of sale</Link></li>
                            <li className='footer-list-item'><Link>Privacy Policy</Link></li>
                            <li className='footer-list-item'><Link>Website terms and conditions</Link></li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <h4 className='footer-menu-title'>SUBSCRIPTION</h4>
                        <ul className='footer-list'>
                            <li className='footer-list-item'><Link>How to start</Link></li>
                            <li className='footer-list-item'><Link>Pricing</Link></li>
                            <li className='footer-list-item'><Link>Subscribe for free</Link></li>
                            <li className='footer-list-item'><Link>FAQ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="social-links">
                    <Link>
                        <i className="fa-brands fa-square-facebook"></i>
                    </Link>
                    <Link>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link>
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </Link>
                    <Link>
                        <i className="fa-brands fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </div>
    </>

  )
}

export default Footer