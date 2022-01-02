import React, {useState,useEffect} from 'react'
import ReactMapGL from 'react-map-gl'
// import {LocationOnOutlinedIcon} from '@material-ui/icons/LocalActivityOutlined'
import {useMediaQuery } from '@material-ui/core';
import useStyles from './ourMapStyle';
import { Marker } from 'react-map-gl';


export default function OurMap({viewport,setViewport,places}) {
 const isDesktop=useMediaQuery('(min-width:600px)')
 const classes=useStyles()    
    
    return (
        <div>
            <ReactMapGL {...viewport} mapboxApiAccessToken='pk.eyJ1IjoiLS1pc2hpa2EzMjEiLCJhIjoiY2t1NTZ4MGN1MWxyZTJ2bzFvZDRvdDNpOSJ9.9PfwICkdSRw_q6G8Rb3rOA'
            mapStyle='mapbox://styles/--ishika321/cku579zni05yq17o33hihxiow'
            onViewportChange={(viewport)=>{
                setViewport(viewport)
               
            }} className={classes.paper}>
           
          


            </ReactMapGL>
        </div>
    )
}
