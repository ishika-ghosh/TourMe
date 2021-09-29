import React,{useEffect,useState} from 'react'
import {CssBaseline,Grid} from '@material-ui/core'
import Places from '../common/Places'
import OurMap from '../common/ourMap'
import { travelFunc } from "../API/index"

function Map() {
    const [places, setplaces] = useState([])
    const [coordinates,setCoordinates]=useState({})
    const [bounds,setBounds]=useState(null)
    const  [type, setType] = useState("");
    useEffect(() => {
        travelFunc(type).then((data) => {
          console.log(data);
          setplaces(data);
        });
      }, [type]);
     
    return (
        <>
        <CssBaseline/>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <Places places={places}
                type={type}
                setType={setType}/>

            </Grid>
            <Grid item xs={12} md={8}>
                <OurMap/>
                {/* // setCoordinates={setCoordinates}
                // setBounds={setBounds}
                // coordinates={coordinates}/> */}

            </Grid>
        </Grid>
          
        </>
    )
}

export default Map
