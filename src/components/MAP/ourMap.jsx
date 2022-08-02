import React from "react";
import ReactMapGL from "react-map-gl";
import useStyles from "./ourMapStyle";

export default function OurMap({ viewport, setViewport }) {
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiLS1pc2hpa2EzMjEiLCJhIjoiY2t1NTZ4MGN1MWxyZTJ2bzFvZDRvdDNpOSJ9.9PfwICkdSRw_q6G8Rb3rOA"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(newviewport) => {
          setViewport({ ...newviewport });
        }}
        // className={classes.paper}
        maxZoom={20}
      ></ReactMapGL>
    </div>
  );
}
