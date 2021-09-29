import React, {useState,useEffect} from 'react'
import ReactMapGL from 'react-map-gl'


export default function OurMap() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
    
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(success, error, options);
    //   }, []);
    //   function success(pos) {
    //     var crd = pos.coords;
      
    //     // console.log('Your current position is:');
    //     // console.log(`Latitude : ${crd.latitude}`);
    //     // console.log(`Longitude: ${crd.longitude}`);
    //     // console.log(`More or less ${crd.accuracy} meters.`);
    //     setViewport({longitude:crd.latitude,latitude:crd.latitude})
    //   }
    //   function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    //   }
      const [viewport, setViewport] =useState({
        longitude: 78.9629,
        latitude: 20.5937,
        width:"100%",
        height:'85vh',
        zoom: 5
      });
    
    return (
        <div>
            <ReactMapGL {...viewport} mapboxApiAccessToken='pk.eyJ1IjoiLS1pc2hpa2EzMjEiLCJhIjoiY2t1NTZ4MGN1MWxyZTJ2bzFvZDRvdDNpOSJ9.9PfwICkdSRw_q6G8Rb3rOA'
            mapStyle='mapbox://styles/--ishika321/cku579zni05yq17o33hihxiow'
            onViewportChange={(viewport)=>{
                setViewport(viewport)
                console.log(viewport)
            }}>

            </ReactMapGL>
        </div>
    )
}
