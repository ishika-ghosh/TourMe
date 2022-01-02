import React from 'react'
import HeroSection from '../common/HeroSection'
import Crads from '../common/Crads'
// import Cards from '../Home/Cards'
import Footer from "../common/Footer";

function Home() {
    return (
        <div className='home'style={{'maxWidth':'100vw'}}>
        <HeroSection/>
        <Crads/>
        <Footer/>
        </div>
    )
}

export default Home
