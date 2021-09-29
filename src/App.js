import React from "react";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import GetGuide from "./components/pages/GetGuide";
import Blogs from "./components/pages/Blogs";
import './App.css'
// import Footer from "./components/common/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/map' component={Map} />
          <Route path='/getGuide' component={GetGuide} />
          <Route path='/blogs' component={Blogs} />
      </Switch>

      {/* <Footer/> */}
    </Router>
      
    </>
  );
}

export default App;
