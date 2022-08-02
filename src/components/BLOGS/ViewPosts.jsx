import React from "react";
import "./viewPost.css";
import { Favorite } from "@material-ui/icons";
import { Rating } from "@mui/material";

function ViewPosts({ data, modal }) {
  return (
    <div className="view-post">
      <h3 className="post-title">{data.visitedPlace}</h3>
      <h4 className="post-time">posted at: {data.timeStamp}</h4>

      <p>{data.experience}</p>
      <br />
      <div>
        {modal === false ? (
          <Rating
            value={data.rating}
            readOnly={true}
            precision={0.5}
            icon={<Favorite fontSize="inherit" color="error" />}
            emptyIcon={<Favorite color="disable" />}
          />
        ) : null}
      </div>
      <h4 className="post-time">
        <b style={{ color: "rgba(36, 33, 33, 0.666)" }}>Author: </b>
        {data.name}
      </h4>
      <div className="img-div">
        <img src={data.image} className="post-img" alt="no" />
      </div>
    </div>
  );
}

export default ViewPosts;
