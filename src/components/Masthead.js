import React, { useState } from "react";
import Lion from "../resources/lion.svg";

export default function Masthead() {
  //This is to toggle the masthead
  const [toggleicon, Settoggleicon] = useState(false);
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <div className="container d-flex px-4">
        <img src={Lion} alt="Masthead icon"></img>
        <span className="px-2">A Singapore Government Agency Website</span>
        <a
          // href=""
          className="text-primary"
          onClick={() =>
            toggleicon ? Settoggleicon(false) : Settoggleicon(true)
          }
        >
          How to identify
          {toggleicon ? (
            <i className="bi bi-chevron-up"></i>
          ) : (
            <i className="bi bi-chevron-down"></i>
          )}
        </a>
      </div>
      {toggleicon ? (
        <div className="container d-lg-flex py-5 px-4">
          <div className="col-lg-6 d-flex">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/2ec2122b2010672b9cbb6efb5138048d8aff4a09/5d1ab/assets/img/government_building.svg"
              alt="Government Building"
              className="h-25 pe-2"
            />
            <div className="row">
              <span className="fw-bold">
                Official website links end with .gov.sg
              </span>
              <span>
                Government agencies communicate via .gov.sg websites (e.g.
                go.gov.sg/open).{" "}
                <a href="https://go.gov.sg/trusted-sites">
                  Trusted websites <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg"
              alt="Lock Icon"
              className="h-25 pe-2"
            />
            <div className="row">
              <span className="fw-bold">Secure websites use HTTPS</span>
              <span>
                Look for a lock <i className="bi bi-lock-fill"></i> or https://
                as an added precaution. Share sensitive information only on
                official, secure websites.
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
