import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import CardDesign from "./CardDesign";
import useStyles from './PlacesStyle';
export default function Places({places,type,setType}) {
    const classes = useStyles();
    
    const func = (e) => { setType = (e.target.value) };
 

    return (
        <div className={classes.container}>
            <Typography variant="h6" >Restaurents And Hotels And Attractions</Typography>
            <FormControl fullWidth className={classes.formControl}>
                <InputLabel id="type">Type</InputLabel>
                <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <CardDesign place={place} />
              </Grid>
            ))}
            </Grid>
        </div>
    )
}

