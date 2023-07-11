import React from "react";

export default function P2Search() {
  return (
    <div className="input-group flex-nowrap">
      {/* <div className="d-flex"> */}
      <input
        type="search"
        className="form-control form-control-lg border-end-0 border-primary"
        placeholder="Search our website"
        aria-label=".form-control-lg example"
        aria-describedby="addon-wrapping"
      />
      <span
        className="input-group-text bg-white border-primary text-primary"
        id="addon-wrapping"
      >
        <i className="bi bi-search"></i>
      </span>
      {/* </div> */}
    </div>
  );
}
