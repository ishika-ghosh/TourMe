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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position.coords);
        setViewport((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);
  useEffect(() => {
    getCity(city).then((data) => {
      setViewport((prev) => ({
        ...prev,
        latitude: data[0].lon,
        longitude: data[0].lat,
      }));
    });
  }, [city]);
  useEffect(() => {
    setIsloading(true);

    if (viewport.latitude && viewport.longitude) {
      travelFunc(type, viewport.latitude, viewport.longitude).then((data) => {
        setplaces(data?.filter((place) => place.name && place.rating > 0));
        console.log(places);
        setIsloading(false);
      });
    }
  }, [type, viewport.latitude, viewport.longitude]);

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
