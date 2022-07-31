import React from "react";
import "./viewPost.css";

function ViewPosts({ data }) {
  return (
    <div className="view-post">
      <h3 className="post-title">{data.visitedPlace}</h3>
      <h4 className="post-time">posted at: {data.timeStamp}</h4>

      <p>{data.experience}</p>
      <h4 className="post-time">
        <b style={{ color: "rgba(36, 33, 33, 0.666)" }}>Author: </b>
        {data.name}
      </h4>
      <div className="img-div">
        <img src={data.image} className="post-img" />
      </div>
    </div>
  );
}

export default ViewPosts;
