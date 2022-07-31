import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NAVBAR/Navbar";
import Home from "./components/HOME/Home";
import Map from "./components/MAP/Map";
import GetGuide from "./components/GUIDE/GetGuide";
import Blogs from "./components/BLOGS/Blogs";
import Contact from "./components/CONTACT/Contact";
import "./App.css";
// import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/getGuide" component={GetGuide} />
          <Route path="/blog" component={Blogs} />
          <Route path="/contact" component={Contact} />
        </Switch>

        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
