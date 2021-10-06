import React,{useEffect,useState} from 'react'
import {CssBaseline,Grid} from '@material-ui/core'
import Places from '../common/Places'
import OurMap from '../common/ourMap'
import { getCity, travelFunc } from "../API/index"


function Map() {
    const [places, setplaces] = useState([])
    const [viewport, setViewport] =useState({
            longitude:0,
            latitude:0,
            width:"63vw",
            height:'85vh',
            zoom: 8

    });
    const [city,setCity]=useState('')
    const  [type, setType] = useState("restaurants");
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
      }, []);
      function success(pos) {
        var crd = pos.coords;
 
        setViewport({longitude:crd.longitude,latitude:crd.latitude,
          width:"63vw",
          height:'85vh',
          zoom: 8})
      }
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    useEffect(() => {
      
        travelFunc(type,viewport).then((data) => {
          // console.log(data);
          setplaces(data);
        });
      }, [type,viewport]);
    useEffect(()=>{
        getCity(city).then(
          (data)=>{
            setViewport({
              longitude:data[0].lon,
              latitude:data[0].lat,
              width:"100%",
              height:'85vh',
              zoom: 8})
          })
          },[city]
        )        
     
     
    return (
        <>
        <CssBaseline/>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <Places places={places}
                type={type}
                setType={setType}
                setCity={setCity}
                city={city}
                
               />

            </Grid>
            <Grid item xs={12} md={8}>
                <OurMap
                viewport={viewport}
                setViewport={setViewport}
                places={places}
                />
                

            </Grid>
        </Grid>
          
        </>
    )
}

export default Map
