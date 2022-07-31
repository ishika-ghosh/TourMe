import React from "react";
import "./blogForm.css";

function ModalControl({ setModal }) {
  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>
        Let us know What's your experience...
      </h1>
      <button className="modal-btn" onClick={() => setModal(true)}>
        Post your Experience
      </button>
    </div>
  );
}

export default ModalControl;
