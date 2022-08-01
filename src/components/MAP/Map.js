import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Places from "./Places";
import OurMap from "./ourMap";
import { getCity, travelFunc } from "../API/index";

function Map() {
  const [places, setplaces] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: 0,
    latitude: 0,
    width: "100%",
    height: "100%",
    zoom: 12,
  });
  const [city, setCity] = useState("");
  const [type, setType] = useState("restaurants");
  const [isloading, setIsloading] = useState(false);
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
  function success(pos) {
    var crd = pos.coords;

    setViewport({
      longitude: crd.longitude,
      latitude: crd.latitude,
      width: "100%",
      height: "100%",
      zoom: 12,
    });
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    getCity(city).then((data) => {
      setViewport({
        longitude: data[0].lon,
        latitude: data[0].lat,
        width: "100%",
        height: "100%",
        zoom: 12,
      });
    });
  }, [city]);
  useEffect(() => {
    setIsloading(true);
    travelFunc(type, viewport).then((data) => {
      setplaces(data.data.data);
      console.log(places);
      setIsloading(false);
    });
  }, [type, viewport]);

  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Places
            places={places}
            type={type}
            setType={setType}
            setCity={setCity}
            city={city}
            isloading={isloading}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingTop: "20px" }}>
          <OurMap viewport={viewport} setViewport={setViewport} />
        </Grid>
      </Grid>
    </>
  );
}

export default Map;
