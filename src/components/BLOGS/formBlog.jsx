import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./blogForm.css";

const FormBlog = React.forwardRef(
  ({ onSubmit, onChangeInput, Data, onFileSet, fileData, loading }, ref) => (
    <>
      <form method="POST" onSubmit={onSubmit} ref={ref}>
        <div className="mid-div">
          <div className="input-box">
            <input
              type="text"
              required="required"
              name="name"
              value={Data.name}
              onChange={onChangeInput}
            />
            <span>Full Name</span>
          </div>

          <div className="input-box">
            <input
              type="text"
              required="required"
              name="visitedPlace"
              value={Data.visitedPlace}
              onChange={onChangeInput}
            />
            <span>Your experience</span>
          </div>
          <div className="input-box">
            <input
              type="text"
              required="required"
              name="experience"
              value={Data.experience}
              onChange={onChangeInput}
            />
            <span>Type your message</span>
          </div>
          {fileData.fileContent && (
            <img id="preview" src={fileData.fileContent} alt="no" />
          )}
          {fileData.fileName && (
            <h4 style={{ marginBottom: "10px" }}>{fileData.fileName}</h4>
          )}

          <input
            type="file"
            onChange={onFileSet}
            accept="image/*"
            id="file-button"
            required
          />
          <label htmlFor="file-button" id="upload-image">
            + POST IMAGE
          </label>
        </div>
        <div className="low-div">
          {loading ? (
            <CircularProgress />
          ) : (
            <div className="input-box">
              <input type="submit" value="POST"></input>
            </div>
          )}
        </div>
      </form>
    </>
  )
);

export default FormBlog;
