import React from 'react'
import img2 from './img2.jpeg'
import img1 from './img1.jpeg'
import img3 from './img3.jpeg'
import bigbo from './bigbo.jpeg'
import './Cards.css'
import TypeWriterEffect from 'react-typewriter-effect'
function Crads() {
    return (
        <div>
            <div className="heading">
                <TypeWriterEffect

                    startDelay={1000}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Hey there,',
                        'TourMe welcomes you',
                        'to your dream trip',
                        'Explore the world',

                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                />

            </div>
            <div className="body">
                <div className='Card-container'>
                    <div className="card">
                        <div className="imgbox">
                            <img src={img1} alt=''/>
                        </div>
                        <div className="card-content">
                            <h2>What do we do for you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad laboriosam unde adipisci neque fuga eligendi magni, iste, consequuntur atque animi. Voluptas ea expedita tempore explicabo esse quod quo quasi.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbox">
                            <img src={img2} alt=''/>
                        </div>
                        <div className="card-content">
                            <h2>What do we do for you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad laboriosam unde adipisci neque fuga eligendi magni, iste, consequuntur atque animi. Voluptas ea expedita tempore explicabo esse quod quo quasi.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbox">
                            <img src={img3} className='image3' alt=''/>
                        </div>
                        <div className="card-content">
                            <h2>What do we do for you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad laboriosam unde adipisci neque fuga eligendi magni, iste, consequuntur atque animi. Voluptas ea expedita tempore explicabo esse quod quo quasi.</p>
                        </div>
                    </div>

                </div>
                

                </div>
                <div className="bigbo">
                    <div className="bigbox">
                        <img src={bigbo} alt=''/>
                        <div className="parabox">
                        <h1>Hello World</h1>
                        <p>Lorem ipsum, dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum a fuga animi repudiandae </p>
                        </div>
                        
                    </div>
            </div>

        </div>
    )
}

export default Crads
