import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'



function Footer() {
    return (
        <div>
            <footer>
                <div className="foot-container">
                    <div className="sec abouts">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum deserunt officiis aliquid omnis sint reprehenderit ratione accusantium velit mollitia ipsa?
                            Placeat, aliquam fuga. Sunt commodi ullam obcaecati natus harum cumque.</p>
                        <ul className="sci">
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="fab fa-facebook"/></Link></li>
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="fab fa-twitter"/></Link></li>
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="fab fa-instagram"/></Link></li>
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="far fa-envelope"/></Link></li>
                        </ul>
                    </div>
                    <div className="sec quickLinks">
                        {/* <h2>Quick Links</h2>
                        <ul>
                            <li className="link-items">About Us</li>
                            <li className="link-items">FAQ</li>
                            <li className="link-items">Terms and Conditions</li>
                            <li className="link-items">Privacy Policy</li>

                        </ul> */}

                    </div>
                    <div className="sec quickLinks">
                        {/* <h2>Our suggestions</h2>
                        <ul>
                            <li className="link-items">Ladakh
                            </li>
                            <li className="link-items">Ladakh
                            </li>
                            <li className="link-items">Ladakh
                            </li>
                            <li className="link-items">Ladakh
                            </li>
                            <li className="link-items">Ladakh
                            </li>
                            <li className="link-items">Ladakh
                            </li>
                        </ul> */}
                        <h2>Quick Links</h2>
                        <ul>
                            <li className="link-items">About Us</li>
                            <li className="link-items">FAQ</li>
                            <li className="link-items">Terms and Conditions</li>
                            <li className="link-items">Privacy Policy</li>

                        </ul>s
                    </div>
                    <div className="sec contact">
                        <h2>Contact Us</h2>
                        <ul className="info">
                            <li className='info-items'>
                                <span><i className="fas fa-map-marker-alt"/></span>
                                <span>647 Linda Street<br />
                                    Phoneixville,PA 19450,<br />USA
                                </span>
                            </li>
                            <li className='info-items'>
                                <span><i className="fas fa-phone-alt"/></span>
                                <span>647 Linda Street<br />
                                    Phoneixville,PA 19450,<br />USA
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

            </footer>
            <div className="copyright">
                <p>Copyright © 2021 webFour.All rights are reserved</p>
            </div>
        </div>
    )
}

export default Footer
