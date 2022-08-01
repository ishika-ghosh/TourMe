import React from "react";
import "./blogForm.css";
import FormBlog from "./formBlog";

const ModalComp = React.forwardRef(
  (
    { submit, changeInput, setFile, data, isloading, file, setModal, setdata },
    ref
  ) => (
    <div className="blog-form">
      <div className="blog-div">
        <div className="upper-div">
          <h2>What's on your mind..</h2>
          <button
            onClick={() => {
              setModal(false);
              setdata((prev) => ({
                ...prev,
                userData: {
                  name: "",
                  visitedPlace: "",
                  experience: "",
                  image: "",
                  rating: 0,
                },
                fileData: {
                  fileName: "",
                  fileContent: "",
                },
              }));
            }}
          >
            X
          </button>
        </div>
        <FormBlog
          onSubmit={submit}
          ref={ref}
          onChangeInput={changeInput}
          Data={data}
          onFileSet={setFile}
          loading={isloading}
          fileData={file}
          setData={setdata}
        />
      </div>
    </div>
  )
);

export default ModalComp;
