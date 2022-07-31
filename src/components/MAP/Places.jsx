import React, { useRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import CardDesign from "./CardDesign";
import useStyles from "./PlacesStyle";

export default function Places({
  places,
  type,
  setType,
  setCity,
  city,
  isloading,
}) {
  const classes = useStyles();
  const cityRef = useRef(null);

  return (
    <div className={classes.container}>
      <Typography variant="h6">
        Restaurents And Hotels And Attractions
      </Typography>
      <InputLabel id="type">City you want to visit</InputLabel>
      <input
        type="text"
        id="city"
        ref={cityRef}
        name="city"
        style={({ width: "100%" }, { margin: "4px 5px" })}
      />
      <button
        onClick={() => {
          setCity(cityRef.current.value);
        }}
      >
        Search here
      </button>

      {isloading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Typography variant="h6">
            Restaurents And Hotels And Attractions
          </Typography>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
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
        </>
      )}
    </div>
  );
}
