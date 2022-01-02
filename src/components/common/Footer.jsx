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
                        <p>Our team FourWeb is designing a Travelling Website which aims on providing travellers an enjoyable and happy journey!
                                With TourMe you can get a better idea of the place you want to visit.
                                You get an insight about Hotels,Restaurants, Tourist Attractions and what not along with the Budget.</p>
                        <ul className="sci">
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="fab fa-facebook"/></Link></li>
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="fab fa-twitter"/></Link></li>
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="fab fa-instagram"/></Link></li>
                            <li className="sci-items"><Link to='/' className='sci-link'><i className="far fa-envelope"/></Link></li>
                        </ul>
                    </div>
                    <div className="sec quickLinks">
                       

                    </div>
                    <div className="sec quickLinks">
                        
                        <h2>Quick Links</h2>
                        <ul>
                            
                            <Link to='/contact'className='contact-link'><li className="link-items">Contact Us</li></Link>
                            <Link to='/'className='contact-link'><li className="link-items">FAQ</li></Link>
                            <Link to='/'className='contact-link'><li className="link-items">Terms and Conditions</li></Link>
                            <Link to='/'className='contact-link'><li className="link-items">Privacy Policy</li></Link>

                        </ul>
                    </div>
                    <div className="sec contacts">
                        <h2>Contact Us</h2>
                        <ul className="info">
                            <li className='info-items'>
                                <span><i className="fas fa-map-marker-alt"/></span>
                                <span>129/5 RG Nagar Road<br />
                                    HindMotar,Howrah<br />India


                                </span>
                            </li>
                            <li className='info-items'>
                                <span><i className="fas fa-phone-alt"/></span>
                                <span>+91 8910631623<br />
                                   
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

            </footer>
            <div className="copyright">
                <p>Copyright © 2021 FOURWEB.All rights are reserved</p>
            </div>
        </div>
    )
}

export default Footer
