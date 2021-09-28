import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography,useMediaQuery} from '@material-ui/core'
import LocatiOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
// import {makeStyles} from './MapStyle'
import { keys } from '@material-ui/core/styles/createBreakpoints'
import './StyleMap.css'

function MapElement() {
    // const classes=makeStyles();
    const isMobile=useMediaQuery('(min-width:700px)')
    const coordinates={lat:0,lng:0}
    return (
        <div className='map-container'>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyBM_5yWq5MPNJRLRERVcuuNLirswuwfLeI'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}


            >

            </GoogleMapReact>
            
        </div>
    )
}

export default MapElement
