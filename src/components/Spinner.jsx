import React from "react";

const Spinner = ()=>{

    return (
      <div className="text-center my-3">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    );
}
export default Spinner