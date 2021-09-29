import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './Navbar.css'
import logo from './logo.png'


function Navbar() {
    const [Click,setClick]=useState(false)
    const HideMobileMenu=()=>{
        setClick(false)
    }
    const ClickHandle=()=>setClick(!Click)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link to='/' className='Navbar-logo' onClick={HideMobileMenu}>
                    <img src={logo} alt=''className='logo-img'/> TourMe
                    </Link>
                    <div className="menu-icons"onClick={ClickHandle}>
                        <i className={Click?'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={Click?"nav-menu active":'nav-menu'}>
                        <li className="nav-items">
                            <Link to='/' className='nav-links' onClick={HideMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/map' className='nav-links' onClick={HideMobileMenu}>Map</Link>
                        </li>
                        <li className="nav-items">
                        <a href='https://am-here.github.io/forms.github.io/' target='_blank' onClick={HideMobileMenu} className='nav-links'>Get Guides</a>
                        </li>
                        <li className="nav-items">
                            {/* <Link  className='nav-links' onClick={HideMobileMenu} onClick={window.open('https://am-here.github.io/blogs.github.io/','__blank')}>Blogs</Link> */}
                            <a href='https://am-here.github.io/blogs.github.io/' target='_blank' onClick={HideMobileMenu} className='nav-links'>Blogs</a>
                        </li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar
