import React from "react";
import img2 from "../assets/img2.jpeg";
import img1 from "../assets/img1.jpeg";
import img3 from "../assets/img3.jpeg";
import bigbo from "../assets/bigbo.jpeg";
import "./Cards.css";
import TypeWriterEffect from "react-typewriter-effect";
function Cards() {
  return (
    <div>
      <div className="heading">
        <TypeWriterEffect
          startDelay={1000}
          cursorColor="#3F3D56"
          multiText={[
            "Hey there,",
            "TourMe welcomes you",
            "to your dream trip",
            "Explore the world",
          ]}
          loop={true}
          nextTextDelay={1000}
          typeSpeed={30}
        />
      </div>
      <div className="card-div">
        <div className="Card-container">
          <div className="card">
            <div className="imgbox">
              <img src={img1} alt="" />
            </div>
            <div className="card-content">
              <h2>What do we do for you</h2>
              <p>
                Our team FourWeb is designing a Travelling Website which aims on
                providing travellers an enjoyable and happy journey! With TourMe
                you can get a better idea of the place you want to visit. You
                get an insight about Hotels,Restaurants, Tourist Attractions and
                what not along with the Budget.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbox">
              <img src={img2} alt="" />
            </div>
            <div className="card-content">
              <h2>WHY CHOOSE US:</h2>
              <p>
                *Budget Friendly Tour *Amazing Destinations *One-stop
                destination for all your needs. *Thriller Experience
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbox">
              <img src={img3} className="image3" alt="" />
            </div>
            <div className="card-content">
              <h2>Live your Life</h2>
              <p>
                {" "}
                “Travel is fatal to prejudice, bigotry, and narrow mindedness,
                and many of our people need it sorely on these accounts.” ~ Mark
                Twain
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bigbo">
        <div className="bigbox">
          <img src={bigbo} alt="" />
          <div className="parabox">
            <h1>TRAVEL</h1>
            <p>
              “Do not follow where the path may lead. Go instead where there is
              no path and leave a trail” – Ralph Waldo Emerson{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
